import { useState, useRef, Suspense, MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

interface starProps {
  count: number;
}

const generateSphericalPoints = (
  count: number,
  radius: number
): Float32Array => {
  const points = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Generate random point in a unit sphere using spherical coordinates
    const theta = Math.random() * Math.PI * 2; // Azimuthal angle
    const phi = Math.acos(1 - 2 * Math.random()); // Polar angle
    const r = Math.cbrt(Math.random()) * radius; // Uniform distribution in volume

    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }

  return points;
};

const Stars = ({ count }: starProps) => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const ref: MutableRefObject<any> = useRef();
  const [sphere] = useState(() => generateSphericalPoints(count, 1.2));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#BADFF5"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({ count }: starProps) => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars count={count} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
