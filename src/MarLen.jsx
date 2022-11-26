import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function MarLen(props) {
  
  const [letras] = useBox(() => ({
    mass: 1,
    args: [2, .25, .5],
    material: {
        friction: 1,
        restitution: 0
    },
    ...props
  }));

  const { nodes, materials } = useGLTF("/Models/MarLen.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.01, 0.46, -0.04]} scale={[0.7, 0.5, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials.Letras}
        />
      </group>
    </group>
  );

}

useGLTF.preload("/Models/MarLen.glb");