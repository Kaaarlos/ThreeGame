import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function LetrasCar(props) {
  const [letras] = useBox(() => ({
    mass: 1,
    args: [4, .25, 1],
    material: {
        friction: 1,
        restitution: 0
    },
    ...props
  }));

  const { nodes, materials } = useGLTF("/Models/LetrasCarlos .glb");
  return (
    <group  ref={letras}  {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.001"]}
        position={[2.25, 3.91, -0.17]}
        rotation={[1.57, 0, 0]}
        scale={[11.34, 4.13, 11.34]}
      />
    </group>
  );
}

useGLTF.preload("/Models/LetrasCarlos .glb");