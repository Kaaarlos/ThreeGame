/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function Banderas(props) {

    const [letras] = useBox(() => ({
        mass: 1,
        args: [1, .25, .5],
        material: {
            friction: 1,
            restitution: 0
        },
        ...props
      }));

  const { nodes, materials } = useGLTF("/Models/Bandera.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0.77, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.09, 0.75, 0.09]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[-20, 0.77, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.09, 0.75, 0.09]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group
        position={[20, 0.77, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.09, 0.75, 0.09]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </group>
    
  );
}

useGLTF.preload("/Models//Bandera.glb");