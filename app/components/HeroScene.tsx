"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function CoreShape() {
  const mesh = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.25;
      mesh.current.rotation.y = t * 0.35;
    }
    if (wire.current) {
      wire.current.rotation.x = -t * 0.18;
      wire.current.rotation.y = t * 0.22;
    }
  });

  return (
    <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        <mesh ref={mesh} scale={1.35}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#4f8cff"
            emissive="#3b0764"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.7}
            distort={0.28}
            speed={1.8}
            transparent
            opacity={0.95}
          />
        </mesh>
        <mesh ref={wire} scale={1.85}>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.22} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} scale={2.6}>
          <torusGeometry args={[1, 0.012, 16, 120]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.35} />
        </mesh>
        <mesh rotation={[0.4, 0.8, 0]} scale={2.2}>
          <torusGeometry args={[1, 0.01, 16, 120]} />
          <meshBasicMaterial color="#4f8cff" transparent opacity={0.25} />
        </mesh>
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 900;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const points = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    points.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#8ab4ff"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene() {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#050816"]} />
        <fog attach="fog" args={["#050816", 7, 14]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 5]} intensity={1.4} color="#9ec5ff" />
        <pointLight position={[-4, -2, 3]} intensity={1.2} color="#a855f7" />
        <pointLight position={[3, -3, 2]} intensity={0.8} color="#22d3ee" />
        <Suspense fallback={null}>
          <CoreShape />
          <ParticleField />
          <Sparkles
            count={reduced ? 20 : 60}
            scale={[8, 5, 6]}
            size={1.6}
            speed={0.25}
            opacity={0.5}
            color="#7dd3fc"
          />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,140,255,0.18),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.18),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </div>
  );
}
