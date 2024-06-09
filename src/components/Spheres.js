import React, { useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import silverTextureImg from "../assets/images/ballsbg.png";

const Sphere = ({ position, args, label, delay }) => {
  const ref = useRef();
  const textRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const texture = useLoader(THREE.TextureLoader, silverTextureImg);

  const { scale, pos } = useSpring({
    scale: isHovered ? 1.2 : 1,
    pos: position,
    from: { pos: [0, 0, 0] },
    config: { tension: 170, friction: 26 },
  });

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;

    if (textRef.current) {
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <animated.group position={pos}>
      <animated.mesh
        ref={ref}
        scale={scale}
        onPointerEnter={(event) => (
          event.stopPropagation(), setIsHovered(true)
        )}
        onPointerLeave={() => setIsHovered(false)}
      >
        <sphereGeometry args={args} />
        <meshStandardMaterial map={texture} metalness={-1} roughness={1} />
      </animated.mesh>
      <Text
        ref={textRef}
        position={[0, 0, args[0] + 0.08]}
        rotation={[0, 0, 0]}
        fontSize={args[0] * 0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {label}
      </Text>
    </animated.group>
  );
};

const Spheres = () => {
  return (
    <Canvas
      camera={{ fov: 30, aspect: window.innerWidth / window.innerHeight, near: 0.1, far: 1000, position: [0, 0, 10] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[0, 6, 6]} intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Sphere
        position={[0, 0, 0]}
        args={[1.2, 30, 32]}
        // delay={0}
      />
      <Sphere
        position={[-1.5, -0.4, 2]}
        args={[0.35, 32, 32]}
        label="Detail Oriented"
        // delay={200}
      />
      <Sphere
        position={[1.8, -0.5, 3]}
        args={[0.25, 32, 32]}
        label="Timeless"
        // delay={400}
      />
      <Sphere
        position={[2.8, 0.75, 2]}
        args={[0.4, 20, 20]}
        label="Professional"
        // delay={600}
      />
      <Sphere
        position={[-1.2, 1.2, 2]}
        args={[0.35, 32, 32]}
        label="Efficient"
        // delay={800}
      />
      <Sphere
        position={[-3, 0.3, 1]}
        args={[0.6, 32, 32]}
        label="Conceptual"
        // delay={1000}
      />
    </Canvas>
  );
};

export default Spheres;
