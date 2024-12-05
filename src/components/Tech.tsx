import { technologies } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Suspense, useState } from "react";
import CanvasLoader from "./Loader";
import { SkillCard } from "./canvas/SkillCard";

const generateNonOverlappingPositions = (
  count: number,
  radius: number,
  minDistance: number
): [number, number, number][] => {
  const positions: [number, number, number][] = [];

  while (positions.length < count) {
    const candidate: [number, number, number] = [
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius,
      (Math.random() * 2 - 1) * radius,
    ];

    // Check if position is far enough from existing positions
    const isOverlapping = positions.some(
      (pos) =>
        Math.hypot(
          candidate[0] - pos[0],
          candidate[1] - pos[1],
          candidate[2] - pos[2]
        ) < minDistance
    );

    if (!isOverlapping) {
      positions.push(candidate);
    }
  }

  return positions;
};

const Tech = () => {
  const [positions] = useState(() =>
    generateNonOverlappingPositions(technologies.length, 10, 3)
  );

  return (
    <div className="w-full h-[500px] md:h-screen">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 45 }}
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} autoRotate />

          {/* Lighting for better visibility */}
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          {/* Render glowing balls falling from top to bottom */}
          {technologies.map((tech, index) => {
            return (
              <SkillCard
                key={index}
                position={positions[index]}
                icon={tech.icon}
              />
            );
          })}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default Tech;
