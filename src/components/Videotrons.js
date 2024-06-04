import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module';
import { gsap } from 'gsap';

const Videotrons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // // Stats
    // const stats = new Stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.top = 0;
    // document.body.appendChild(stats.domElement);

    // Planes and texture loading
    const planes = [];
    const radius = 4;
    const numPlanes = 12;
    const angleIncrement = (2 * Math.PI) / numPlanes;

    const textureLoader = new THREE.TextureLoader();
    const textures = Array.from({ length: numPlanes }, (_, i) =>
      textureLoader.load(`https://picsum.photos/1280/720.webp?random=${i + 1}`)
    );

    for (let i = 0; i < numPlanes; i++) {
      const geometry = new THREE.PlaneGeometry(1.6, 0.9);
      const material = new THREE.MeshBasicMaterial({ map: textures[i], side: THREE.DoubleSide });
      material.transparent = true;
      const plane = new THREE.Mesh(geometry, material);

      const angle = i * angleIncrement;
      plane.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      plane.lookAt(0, 0, 0);
      planes.push(plane);
    }

    const planeGroup = new THREE.Group();
    planes.forEach(plane => planeGroup.add(plane));
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
        const angleToRotate = Math.atan2(clickedPlanePosition.z, clickedPlanePosition.x);

        gsap.to(camera.position, {
          x: Math.cos(angleToRotate) * camera.position.length(),
          z: Math.sin(angleToRotate) * camera.position.length(),
          duration: 1,
          onUpdate: () => {
            camera.lookAt(scene.position);
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const raycaster = new THREE.Raycaster();

    function render() {
      requestAnimationFrame(render);
      
      const tiltFactor = 0.1;
      planeGroup.rotation.x = mouseY * tiltFactor;
      planeGroup.rotation.z = -mouseX * tiltFactor;

      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(planeGroup.children);

      if (intersects.length > 0) {
        document.body.classList.add('hovered');
        const hoveredPlane = intersects[0].object;
        planes.forEach(plane => {
          if (plane === hoveredPlane) {
            gsap.to(plane.material, { opacity: 1, duration: 0.5 });
          } else {
            gsap.to(plane.material, { opacity: 0.5, duration: 0.5 });
          }
        });
      } else {
        document.body.classList.remove('hovered');
        planes.forEach(plane => {
          gsap.to(plane.material, { opacity: 1, duration: 0.5 });
        });
      }

      renderer.render(scene, camera);
      // stats.update();
    }
    render();

    const resize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resize);
      // document.body.removeChild(stats.domElement);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ height: '100vh', width: '100%' }} />;
};

export default Videotrons;
