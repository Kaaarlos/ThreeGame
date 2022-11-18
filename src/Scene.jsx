import{
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";

import {Suspense} from "react"
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";

export function Scene(){
    return(
        <Suspense fallback={null}>
        <Environment
            files={process.env.PUBLIC_URL + "/Textures/envmap.hdr"}
            background={"both"}
        />
        <PerspectiveCamera makeDefalt position={[-6, 3.9, 6.21]} fov={40}/>
        <OrbitControls target={[-2.64, -0.71, 0.03]}/>
        <Track/>
        <Ground/>
        <Car/>
        </Suspense>
    )
}