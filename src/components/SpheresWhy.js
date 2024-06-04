import React, { useState,useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import silverTextureImg from '../assets/images/pearls.jpg';

const Sphere = ({ position, args, label, delay }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const texture = useLoader(THREE.TextureLoader, silverTextureImg);

  const { scale, pos } = useSpring({
    scale: isHovered ? 1.2 : 1,
    pos: position,
    from: { pos: [0, 0, 0] },
    config: { tension: 170, friction: 26 },
    delay,
    // : delay,
  });

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <animated.group position={pos}>
      <animated.mesh
        ref={ref}
        scale={scale}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)}
      >
        <sphereGeometry args={args} />
        <meshStandardMaterial
          map={texture}
          metalness={0}
          roughness={0.5}
        />
      </animated.mesh>
      <Text
        position={[0, 0, 0]}
        fontSize={0.1}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </animated.group>
  );
};

const Spheres = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 5, 5]} intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Sphere position={[0, 0, 0]} args={[1.2, 30, 32]} label="Tengah" delay={0} />
      <Sphere position={[-1, -0.75, 3]} args={[0.3, 32, 32]} label="Bola 5" delay={200} />
      <Sphere position={[1.5, 0, 3]} args={[0.25, 32, 32]} label="Bola 4" delay={400} />
      <Sphere position={[1.5, 1.5, 2]} args={[0.4, 32, 32]} label="Bola 2" delay={600} />
      <Sphere position={[-1.50, 1.5, 2]} args={[0.50, 32, 32]} label="Bola 1" delay={800} />
      <Sphere position={[-1.8, 0, 3]} args={[0.25, 32, 32]} label="Bola 3" delay={1000} />
      <Sphere position={[1, -0.7, 3]} args={[0.3, 32, 32]} label="Bola 6" delay={1200} />
    </Canvas>
  );
};

export default Spheres;