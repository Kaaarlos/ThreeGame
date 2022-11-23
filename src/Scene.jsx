import{
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";

import { Suspense,useEffect, useState } from "react";
import { Car } from "./Car";
import { Obstaculos } from "./Obstaculos";
import { Plane2 } from "./Plane";
import { LetrasCarlos } from "./LetrasCarlos";
import { Cube } from "./Cube";
import { Pizarras } from "./Pizarras";


export function Scene(){

    const [thirdPerson, setThirdPerson] = useState(false);
    //antes
    // const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    //Despues
    const [cameraPosition, setCameraPosition] = useState([-3, 3.9, 8]);

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

            <ambientLight intensity={0.3} />
            <Environment
                files={process.env.PUBLIC_URL + "/Textures/envmap.hdr"}
                background={"both"}
            />
            
            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            {!thirdPerson && (
                <OrbitControls target={[.64, -.71, 0.3]} />
            )}
            
            <Plane2/>
            <Obstaculos position={[1,.5,2]} />
            <LetrasCarlos position={[-.5,.5,0]}/>
            <Cube/>
            <Pizarras position={[0,0,-4]} scale={[0.08,0.08,0.08]}/>
            {/* <Screen position= {[0, .54,0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.1,0.1,0.1]}/> */}
            <Car thirdPerson={thirdPerson}/>
        </Suspense>
    )
}