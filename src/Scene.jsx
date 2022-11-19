import{
    Environment,
} from "@react-three/drei";

import { Suspense, useState } from "react";
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Obstaculos } from "./Obstaculos";
import { Plane } from "./Plane";
import { LetrasCarlos } from "./LetrasCarlos";


export function Scene(){

    const [thirdPerson] = useState(false);

    return(
        <Suspense fallback={null}>
            <directionalLight position={[3, 2, 3]} intensity={0.5} castShadow />
            <pointLight position={[0, 2, -3]} intensity={0.6} castShadow />
            <pointLight position={[0, 2, 4]} intensity={0.6} castShadow />

            <ambientLight intensity={0.6} />
            <Environment
                files={process.env.PUBLIC_URL + "/Textures/envmap.hdr"}
                background={"both"}
            />
            <Plane/>
            <Obstaculos position={[-2,.5,2]} />
            <Obstaculos position={[-2,2,2]} />
            <LetrasCarlos/>
            <Car thirdPerson={thirdPerson}/>
        </Suspense>
    )
}