import React, { useEffect } from "react";
import { usePlane } from "@react-three/cannon";
import { Plane ,MeshReflectorMaterial,Html } from "@react-three/drei";


export const Plane2 = () => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [-2.285, -0.01, -1.325],
    material: {
      friction: 0.1
    }
  }));

  return (
    <>
    <mesh  receiveShadow ref={ref} scale={[1000, 1000, 1000]}>
      <planeBufferGeometry  receiveShadow />
      <meshPhongMaterial receiveShadow shininess={10} color={"#52133E"} />

        {/* <Html transform >
          <h1>Hola</h1>
        </Html> */}
    </mesh>
      <Html></Html>

   </>
  );
};
