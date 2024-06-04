// SpheresCount.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sphere from './Spheres'; // Assuming Sphere component is exported from Spheres.js

const SpheresCount = () => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 5, 5]} intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Sphere position={[0, 0, 0]} args={[1.2, 30, 32]} label="Center" delay={0} />
      <Sphere position={[-1, -0.75, 3]} args={[0.3, 32, 32]} label="Sphere 5" delay={200} />
      <Sphere position={[1.5, 0, 3]} args={[0.25, 32, 32]} label="Sphere 4" delay={400} />
      <Sphere position={[1.5, 1.5, 2]} args={[0.4, 32, 32]} label="Sphere 2" delay={600} />
      <Sphere position={[-1.50, 1.5, 2]} args={[0.50, 32, 32]} label="Sphere 1" delay={800} />
      <Sphere position={[-1.8, 0, 3]} args={[0.25, 32, 32]} label="Sphere 3" delay={1000} />
      <Sphere position={[1, -0.7, 3]} args={[0.3, 32, 32]} label="Sphere 6" delay={1200} />
    </Canvas>
  );
};

export default SpheresCount;
