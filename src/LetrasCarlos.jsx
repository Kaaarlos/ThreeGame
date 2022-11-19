import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useBox, useRaycastVehicle } from "@react-three/cannon";
const paletteIndex = 8;

export const LetrasCarlos = (props) => {
    const [color, setColor] = useState("white");

    const [letras, api] = useBox(() => ({
        mass: 5,
        args: [0.04, 0.04, 0.04],
        position: [-2, -0.1, -1],
        material: {
            friction: 1,
            restitution: 0
        },
        ...props
    }));
    
    let mesh = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/carlos2.glb"
    ).scene;
    

    return(
        <mesh ref={letras} receiveShadow={true} layers={props.layers} scale={[.02, .02, .02]}>
            <primitive object={mesh}/>
            <planeBufferGeometry />
            <meshPhongMaterial  />
        </mesh>
    );
}