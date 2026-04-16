import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function AuroraWaves() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Usamos useMemo para no re-instanciar el vector en cada frame
  const pointerTarget = useRef(new THREE.Vector3());
  
  useFrame((state) => {
    if (groupRef.current) {
      // Animación base de flotación (más suave)
      const elapsedTime = state.clock.getElapsedTime();
      const baseOffsetY = Math.sin(elapsedTime * 0.3) * 0.3;
      
      // Interpolación suave (lerp) hacia la posición del mouse
      pointerTarget.current.set(state.pointer.x * 3, state.pointer.y * 3, 0);
      groupRef.current.position.lerp(pointerTarget.current, 0.02);
      
      // Añadimos el offset base a la posición interpolada
      groupRef.current.position.y += baseOffsetY * 0.02; // Suavizamos el impacto del sin
      
      // Rotación sutil basada en la posición del mouse para dar efecto 3D
      const targetRotationX = state.pointer.y * 0.2;
      const targetRotationY = state.pointer.x * 0.3; // Invertido si se desea otro efecto
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      
      // Rotación general constante
      groupRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Esfera Principal - Aurora 1 */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.8, 128, 128]} position={[-2, 1, -5]}>
          <MeshDistortMaterial
            color="#00d2ff"
            speed={2}
            distort={0.4}
            radius={1}
            roughness={0.2}
            metalness={0.8}
            opacity={0.4}
            transparent
          />
        </Sphere>
      </Float>
      
      {/* Esfera Secundaria - Aurora 2 */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[2.2, 128, 128]} position={[3, -1, -6]}>
          <MeshDistortMaterial
            color="#3a7bd5"
            speed={2.5}
            distort={0.5}
            radius={1}
            roughness={0.3}
            metalness={0.7}
            opacity={0.3}
            transparent
          />
        </Sphere>
      </Float>

      {/* Esfera Terciaria - Aurora Accent */}
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[1.2, 128, 128]} position={[0, 2, -7]}>
          <MeshDistortMaterial
            color="#00f2fe"
            speed={3.5}
            distort={0.6}
            radius={1}
            roughness={0.1}
            metalness={0.9}
            opacity={0.35}
            transparent
          />
        </Sphere>
      </Float>
      
      {/* Esfera Gamificación - Naranja de contraste */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.8, 64, 64]} position={[-3, -2, -4]}>
          <MeshDistortMaterial
            color="#F27D26"
            speed={4}
            distort={0.7}
            radius={1}
            roughness={0.4}
            metalness={0.6}
            opacity={0.25}
            transparent
          />
        </Sphere>
      </Float>
group    </group>
  );
}

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-20 bg-[#020202]">
      {/* dpr optimizado para pantallas retina sin sacrificar rendimiento */}
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        {/* Luz principal para dar reflejos tipo "líquido/metal" */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        {/* Luz de relleno azulada desde abajo */}
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3a7bd5" />
        <AuroraWaves />
      </Canvas>
      {/* Capas de overlays para fundir los bordes y darle profundidad de sitio web premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/30 via-[#020202]/60 to-[#020202] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_to_transparent)] pointer-events-none mix-blend-screen" />
    </div>
  );
}
