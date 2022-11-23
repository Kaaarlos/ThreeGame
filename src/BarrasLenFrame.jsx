/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function BarrasLenFrame(props) {

    const [letras] = useBox(() => ({
        mass: 1,
        args: [1, 1, 1],
        material: {
            friction: 1,
            restitution: 0
        },
        ...props
    }));

  const { nodes, materials } = useGLTF("/Models/barrasLenFrame.glb");

  return (
    <group ref={letras}  {...props} dispose={null}>
      <group  position={[-4,.5,-23]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.Letras}
        position={[6.34, 0.28, -22.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.Letras}
        position={[4.14, -5, -15.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={materials.Letras}
        position={[4.12, -5, -28.36]}
      />
    </group>
  );
}

useGLTF.preload("/Models/barrasLenFrame.glb");