import {
  Environment,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader";
import gsap from "gsap";
// import { Vector2, Vector3 } from "three";

const Robot = ({ setZIndex }: { setZIndex: (zIndex: string) => void }) => {
  const group = useRef<THREE.Group>(null);
  const prevPosition = useRef({ x: -0.5, y: 0.5, z: 0 });

  const { scene: robot, animations } = useGLTF("./robot.glb");

  // const { camera } = useThree();

  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, [actions, names]);

  useEffect(() => {
    const handleScroll = () => {
      if (group.current) {
        const scroll = window.scrollY;

        let newPosition = { x: -0.5, y: 0.5, z: 0 };

        if (scroll <= 1200) {
          group.current.visible = false;
        }

        if (scroll <= 1400) {
          setZIndex("-z-10");
          newPosition = { x: -0.5, y: 0.5, z: 0 };
        } else if (scroll > 1400 && scroll <= 1900) {
          group.current.visible = true;
          setZIndex("-z-10");
          newPosition = { x: 0.75, y: 0.3, z: 0 };
        } else if (scroll > 1900 && scroll <= 2400) {
          newPosition = { x: -0.75, y: -1, z: 0 };
        } else if (scroll > 2400) {
          setZIndex("z-1");
          newPosition = { x: 0.75, y: -2.1, z: 0 };
        }

        // Only animate if position has changed
        if (
          newPosition.x !== prevPosition.current.x ||
          newPosition.y !== prevPosition.current.y ||
          newPosition.z !== prevPosition.current.z
        ) {
          gsap.to(group.current.position, {
            x: newPosition.x,
            y: newPosition.y,
            z: newPosition.z,
            duration: 0.8,
            ease: "power2.out",
          });

          gsap.to(group.current.rotation, {
            y: group.current.rotation.y + Math.PI * 2,
            duration: 0.8,
            ease: "power2.out",
          });

          prevPosition.current = newPosition;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setZIndex]);

  // Mouse look-at
  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     if (!group.current) return;

  //     // Convert screen mouse to normalized device coordinates
  //     const mouse = new Vector2(
  //       (event.clientX / window.innerWidth) * 2 - 1,
  //       -(event.clientY / window.innerHeight) * 2 + 1
  //     );

  //     // Unproject mouse to world coordinates
  //     const vector = new Vector3(mouse.x, mouse.y, 0.5).unproject(camera);

  //     // Direction from camera to target
  //     const dir = vector.sub(camera.position).normalize();

  //     // Final target in front of camera, on same Y as model
  //     const target = camera.position.clone().add(dir.multiplyScalar(10));
  //     target.y = group.current.position.y; // <-- fix Y so model doesn't look up/down

  //     // Look at the target horizontally
  //     group.current.lookAt(target);
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, [camera]);

  return (
    <primitive
      object={robot}
      ref={group}
      scale={1}
      position={[-0.5, 0.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

const RobotCanvas = () => {
  const [zIndex, setZIndex] = useState("-z-10");

  return (
    <div className={`absolute top-0 left-0 w-full h-full ${zIndex}`}>
      <Canvas
        frameloop="always"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Environment preset="city" />
          <Robot setZIndex={setZIndex} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
