import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { gsap } from "gsap";
import '../components/css/AllProject.css';

// Import images from assets
import image2 from '../assets/images/image1.png';
import image1 from '../assets/images/image.jpeg';
import image4 from '../assets/images/image2.png';
import image3 from '../assets/images/image.jpeg';
import image6 from '../assets/images/image2.png';
import image5 from '../assets/images/image.jpeg';
import image8 from '../assets/images/image2.png';
import image7 from '../assets/images/image.jpeg';

const AllProject = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.error("Container not found");
      return;
    }

    const scene = new THREE.Scene();

    // Renderer
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error("Error creating WebGL context:", error);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    // Stats
    const stats = new Stats();
    stats.domElement.style.position = "absolute";
    stats.domElement.style.top = 0;
    document.body.appendChild(stats.domElement);

    // Planes and texture loading
    const planes = [];
    const radius = 3.5;
    const numPlanes = 8;
    const angleIncrement = (2 * Math.PI) / numPlanes;

    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load(image1),
      textureLoader.load(image2),
      textureLoader.load(image3),
      textureLoader.load(image4),
      textureLoader.load(image5),
      textureLoader.load(image6),
      textureLoader.load(image7),
      textureLoader.load(image8),
    ];

    for (let i = 0; i < numPlanes; i++) {
      const geometry = new THREE.PlaneGeometry(1.6, 0.9);
      const material = new THREE.MeshBasicMaterial({
        map: textures[i],
        side: THREE.DoubleSide,
      });
      material.transparent = true;
      const plane = new THREE.Mesh(geometry, material);

      // Increase size of planes with indices 1, 3, 5, and 7
      if (i % 2 === 1) {
        plane.scale.set(1.5, 1.5, 1.5);
      }

      const angle = i * angleIncrement;
      plane.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      plane.lookAt(0, 0, 0);
      planes.push(plane);
    }

    const planeGroup = new THREE.Group();
    planes.forEach((plane) => planeGroup.add(plane));
    scene.add(planeGroup);

    let rotationSpeed = 0.025;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / container.offsetWidth) * 2 - 1;
      mouseY = -(event.clientY / container.offsetHeight) * 2 + 1;
    };

    const handleClick = (event) => {
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(planeGroup.children);

      if (intersects.length > 0) {
        const clickedPlane = intersects[0].object;
        const clickedPlanePosition = new THREE.Vector3();
        clickedPlane.getWorldPosition(clickedPlanePosition);
        const angleToRotate = Math.atan2(
          clickedPlanePosition.z,
          clickedPlanePosition.x
        );

        gsap.to(camera.position, {
          x: Math.cos(angleToRotate) * camera.position.length(),
          z: Math.sin(angleToRotate) * camera.position.length(),
          duration: 1,
          onUpdate: () => {
            camera.lookAt(scene.position);
          },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const raycaster = new THREE.Raycaster();

    const handleScroll = () => {
      const element = document.querySelector(".popup");
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition && elementPosition > 0) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    function render() {
      requestAnimationFrame(render);

      const tiltFactor = 0.1;
      planeGroup.rotation.x = mouseY * tiltFactor;
      planeGroup.rotation.z = -mouseX * tiltFactor;

      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(planeGroup.children);

      if (intersects.length > 0) {
        document.body.classList.add("hovered");
        const hoveredPlane = intersects[0].object;
        planes.forEach((plane) => {
          if (plane === hoveredPlane) {
            gsap.to(plane.material, { opacity: 1, duration: 0.5 });
          } else {
            gsap.to(plane.material, { opacity: 0.5, duration: 0.5 });
          }
        });
      } else {
        document.body.classList.remove("hovered");
        planes.forEach((plane) => {
          gsap.to(plane.material, { opacity: 1, duration: 0.5 });
        });
      }

      renderer.render(scene, camera);
      stats.update();
    }
    render();

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);

    // Intersection Observer for text
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, { opacity: 1, duration: 1 });
          } else {
            gsap.to(entry.target, { opacity: 0, duration: 1 });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      document.body.removeChild(stats.domElement);
      container.removeChild(renderer.domElement);

      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden"}}>
      <div className="Project-text" ref={textRef}>
        <h1>P R O J E C T S</h1>
        <p>
          Our comprehensive suite of professional services
          <br />
          cater to a diverse clientele,
          <br />
          ranging from homeowners to commercial developers.
        </p>
      </div>
      <div className="box-container">
        
        <div className="conic">Project</div>
        <div className="conic">Client</div>
        <div className="conic">Events</div>
      </div>
      <div
        ref={containerRef}
        className="popup"
        style={{ height: "100%", width: "100%", margin: 0, padding: 0 }}
      />
    </div>
  );
};

export default AllProject;
