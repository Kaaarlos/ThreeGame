/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function TeclaR(props) {

    const [cubeRef, api] = useBox(() => ({
        mass: 1,
        args: [0.5, .4, 0.5],
        material: {
        friction: .5,
        restitution: 0
        },
        ...props
      }));

  const { nodes, materials } = useGLTF("/Models/TeclasR.glb");
  return (
    <group ref={cubeRef}  {...props} dispose={null}>
      <group position={[0.05, 0, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text006_1.geometry}
          material={materials["Material.021"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/TeclasR.glb");