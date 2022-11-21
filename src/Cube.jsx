import React, { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
const paletteIndex = 2;

export const Cube = (props) => {

    const [cube, api] = useBox(() => ({
        mass: 1,
        args: [.4, .4, .4],
        material: {
            friction: .5,
            restitution: 0
        },
        ...props
    }));

    let mesh = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/Cube.glb"
    ).scene;

    return (
        <mesh castShadow receiveShadow ref={cube} layers={props.layers} scale={[.2,.2,.2]}>
            <primitive object={mesh}/>
        </mesh>
    );
};
