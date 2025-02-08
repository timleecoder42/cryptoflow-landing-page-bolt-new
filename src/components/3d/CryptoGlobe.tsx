import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
      vec3 color1 = vec3(0.3, 0.4, 1.0);
      vec3 color2 = vec3(0.8, 0.3, 1.0);
      
      float noise = sin(vUv.x * 10.0 + time) * sin(vUv.y * 10.0 + time) * 0.5 + 0.5;
      
      vec3 color = mix(color1, color2, noise);
      float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
      
      gl_FragColor = vec4(mix(color, vec3(1.0), fresnel * 0.7), 0.3);
    }
  `;

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </Sphere>
  );
}

export function CryptoGlobe() {
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-96 h-96 hidden lg:block opacity-50 blur-sm">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Globe />
      </Canvas>
    </div>
  );
}