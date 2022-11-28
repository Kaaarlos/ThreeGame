/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function TeclasMov(props) {
  const [cubeRef, api] = useBox(() => ({
    mass: 1,
    args: [0.5, .4, 0.5],
    material: {
    friction: .5,
    restitution: 0
    },
    ...props
  }));

  const { nodes, materials } = useGLTF("/Models/TeclasMov.glb");
  return (
    <group ref={cubeRef} {...props} dispose={null}>
      <group position={[-2.23, 0, 0.91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials["Material.008"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Models/TeclasMov.glb");