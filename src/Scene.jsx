import{
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";

import { Suspense,useEffect, useState } from "react";
import { Car } from "./Car";
import { Obstaculos } from "./Obstaculos";
import { Plane2 } from "./Plane";
import { LetrasCar } from "./LetrasCar";
import { Cube } from "./Cube";
import { Pizarras } from "./Pizarras";
import { PizarrasMa } from "./PizarrasMa";
import { BarrasLen } from "./BarrasLen";
import { BarrasLenFrame } from "./BarrasLenFrame";
import { Carteles } from "./Carteles";
import { CartelesMariana } from "./CartelesMariana";
import { MarianaLetras } from "./MarianaLetras";
import { AlexLetras } from "./AlexLetras";
import { PizarrasAlex } from "./PizarrasAlex";
import { CartelesAlex } from "./CartelesAlex";

export function Scene(){

    const [thirdPerson, setThirdPerson] = useState(false);
    //antes
    // const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    //Despues
    const [cameraPosition, setCameraPosition] = useState([-3, 3.9, 8]);

    useEffect(() => {
        function keydownHandler(e) {
          if (e.key === "c") {
            if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
            setThirdPerson(!thirdPerson); 
          }
        }
    
        window.addEventListener("keydown", keydownHandler);
        return () => window.removeEventListener("keydown", keydownHandler);
      }, [thirdPerson]);

    return(
        <>
        <Suspense fallback={null}>
            {/*Luces Carlos*/}
            <directionalLight position={[3, 4, 3]} intensity={0.5} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[0, 5, -3]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[0, 5, 4]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />

            {/*Luces Mariana*/}
            {/* <directionalLight position={[13, 4, 3]} intensity={0.5} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[10, 5, -3]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            />
            <pointLight position={[10, 5, 4]} intensity={0.6} castShadow shadow-mapSize-height={512}   shadow-mapSize-width={512}
            /> */}

            {/*Ambiente*/}
            <ambientLight intensity={0.3} />
            <Environment
                files={process.env.PUBLIC_URL + "/Textures/envmap.hdr"}
                background={"both"}
            />
            {/*Camara*/}
            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            {!thirdPerson && (
                <OrbitControls target={[.64, -.71, 0.3]} />
            )}

            {/*Objetos Carlos*/}
            <Plane2/>
            <Obstaculos position={[2,.5,-1]} />
            <LetrasCar position={[0,1,-2.1]} scale={[0.08,0.08,0.08]}/>
            <Cube/>
            <Pizarras position={[0,0,-4]} scale={[0.08,0.08,0.08]}/>
            <BarrasLen  rotation={[0,17.2,0]}   position={[3,.5,2]}  scale={[0.08,0.08,0.08]}/> 
            <BarrasLenFrame  rotation={[0,17.2,0]}   position={[-3.5,.5,2]}  scale={[0.08,0.08,0.08]}/> 
            <Carteles  position={[0,0,-4]} scale={[0.08,0.08,0.08]}/>
            <Car thirdPerson={thirdPerson}/>

            {/*Objetos Mariana*/}
            <MarianaLetras position={[10,0,-2]} scale={[1,1,1]}/>
            <PizarrasMa position={[10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <CartelesMariana  position={[10,0,-4]} scale={[0.08,0.08,0.08]}/>

            {/*Objetos Mariana*/}
            <AlexLetras position={[-10.5,.2,-2]} scale={[.9,.9,.9]}/>
            <PizarrasAlex position={[-10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <CartelesAlex position={[-10,0,-4]} scale={[0.08,0.08,0.08]}/>
        </Suspense>      
        </>

    )
}