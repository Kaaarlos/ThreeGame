/*
funcion para las letras, usamos los modelos 3d creados para las letras 
*/
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export function MarianaLetras(props) {

  const [letras] = useBox(() => ({
    mass: 1,
    args: [4, .25, 1],
    material: {
        friction: 1,
        restitution: 0
    },
    ...props
  }));

  const { nodes, materials } = useGLTF("/Models/MarianaLetras.glb");
  return (
    <group   ref={letras} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.Letras}
        position={[-0.05, 0.35, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 0.91, 1]}
      />
    </group>
  );
}

useGLTF.preload("/Models/MarianaLetras.glb");
