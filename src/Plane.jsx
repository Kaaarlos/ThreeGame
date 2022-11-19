import React, { useEffect } from "react";
import { usePlane } from "@react-three/cannon";

export const Plane = () => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-2.285, -0.01, -1.325],
    material: {
      friction: 0.1
    }
  }));

  return (
    <mesh ref={ref} receiveShadow={true} scale={[1000, 1000, 1000]}>
      <planeBufferGeometry />
      <meshPhongMaterial color={"#B64813"} receiveShadow />
    </mesh>
  );
};
