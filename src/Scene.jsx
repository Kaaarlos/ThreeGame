import{
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";

import { Suspense,useEffect, useState } from "react";
import { Track } from "./Track";
import { Ground } from "./Ground";
import { Car } from "./Car";
import { Obstaculos } from "./Obstaculos";
import { Plane2 } from "./Plane";
import { LetrasCarlos } from "./LetrasCarlos";
import { Cube } from "./Cube";

export function Scene(){

    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

    useEffect(() => {
        function keydownHandler(e) {
          if (e.key == "k") {
            // random is necessary to trigger a state change
            if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
            setThirdPerson(!thirdPerson); 
          }
        }
    
        window.addEventListener("keydown", keydownHandler);
        return () => window.removeEventListener("keydown", keydownHandler);
      }, [thirdPerson]);

    return(
        <Suspense fallback={null}>
            <directionalLight position={[3, 4, 3]} intensity={0.5} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[0, 5, -3]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[0, 5, 4]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />

            <ambientLight intensity={0.6} />
            <Environment
                files={process.env.PUBLIC_URL + "/Textures/envmap.hdr"}
                background={"both"}
            />
            
            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            {!thirdPerson && (
                <OrbitControls target={[-0.64, -0.71, 0.03]} />
            )}

            <Plane2/>
            <Obstaculos position={[-2,.5,2]} />
            <LetrasCarlos position={[-2,.5,-1]}/>
            <Cube position={[-1,.5,2]} />
            <Car thirdPerson={thirdPerson}/>
        </Suspense>
    )
}