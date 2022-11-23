import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

export const LetrasCarlos = (props) => {

    const [letras] = useBox(() => ({
        mass: .5,
        args: [4, .25, 1],
        material: {
            friction: .5,
            restitution: 0
        },
        ...props
    }));
    
    let mesh = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/carlos2.glb"
    ).scene;

    return(
        <mesh  shadows="true" castShadow receiveShadow position={[-0.09, 9.65, 7]} ref={letras} layers={props.layers} scale={[1,1,1]}>
            <primitive object={mesh}/>
        </mesh>
    );
}