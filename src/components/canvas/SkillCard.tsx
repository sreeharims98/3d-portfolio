import { useFrame, useThree } from "@react-three/fiber";
import { Plane, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface SkillCardProps {
  position: [number, number, number];
  icon: string;
}

export const SkillCard = ({ position, icon }: SkillCardProps) => {
  const texture = useTexture(icon);
  const meshRef = useRef<THREE.Mesh>(null);

  const { camera } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <Plane args={[2, 2]} position={position} ref={meshRef}>
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent={true}
        opacity={1}
        side={THREE.DoubleSide}
      />
    </Plane>
  );
};
