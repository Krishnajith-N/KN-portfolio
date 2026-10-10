import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Saffron Orb with Chrome Ring and Floating Particles
function SculpturalOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Smooth idle rotational drift & pointer responsiveness
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15;
      meshRef.current.rotation.y = t * 0.2;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.25;
      ringRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
    }

    if (groupRef.current) {
      // Subtle mouse tracking parallax
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        (state.pointer.x * 0.6),
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        (state.pointer.y * 0.6),
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Core Saffron Sculptural Sphere */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 6]} />
          <MeshDistortMaterial
            color="#F4A340"
            roughness={0.15}
            metalness={0.3}
            distort={0.35}
            speed={2}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Orbiting Dark Chrome Outer Ring */}
        <mesh ref={ringRef} scale={2.6} rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#151515"
            metalness={0.95}
            roughness={0.08}
            envMapIntensity={2}
          />
        </mesh>

        {/* Secondary Saffron Accent Ring */}
        <mesh scale={3.1} rotation={[-Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[1, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#E87924"
            emissive="#F4A340"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Floating Particles
function FloatingParticles({ count = 40 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#F4A340"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Hero 3D Component with Error Boundary & CSS Fallback
export const Hero3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(supportsWebGL);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-brand-orange-dark via-brand-orange to-brand-charcoal animate-pulse-subtle blur-sm border border-brand-orange/30 shadow-[0_0_80px_rgba(244,163,64,0.3)] flex items-center justify-center">
          <span className="text-brand-black font-display font-bold text-6xl tracking-tighter opacity-80">KN.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[450px] md:h-[600px] relative pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#F4A340" />
        <pointLight position={[0, 0, 5]} intensity={1} color="#F4A340" />
        
        <SculpturalOrb />
        <FloatingParticles count={45} />
      </Canvas>

      {/* Floating 3D Micro-Labels */}
      <div className="absolute top-1/4 left-4 md:left-12 px-3 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-white/10 text-xs font-mono text-brand-orange tracking-wider animate-float hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
        STRATEGY
      </div>

      <div className="absolute bottom-1/3 right-4 md:right-12 px-3 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-white/10 text-xs font-mono text-brand-offwhite tracking-wider animate-float [animation-delay:2s] hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-offwhite" />
        CONTENT
      </div>

      <div className="absolute bottom-10 left-1/3 px-3 py-1.5 rounded-full bg-brand-charcoal/80 backdrop-blur-md border border-brand-white/10 text-xs font-mono text-brand-orange tracking-wider animate-float [animation-delay:4s] hidden sm:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-orange-dark" />
        GROWTH
      </div>
    </div>
  );
};
