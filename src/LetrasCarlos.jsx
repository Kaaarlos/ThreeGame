import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";

export const LetrasCarlos = (props) => {
    const [color, setColor] = useState("white");

    const [letras, api] = useBox(() => ({
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
        <mesh castShadow receiveShadow ref={letras} layers={props.layers} scale={[1,1,1]}>
            <primitive object={mesh}/>
        </mesh>
    );
}