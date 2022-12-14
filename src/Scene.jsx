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

import { Carteles } from "./Carteles";
import { CartelesMariana } from "./CartelesMariana";
import { MarianaLetras } from "./MarianaLetras";
import { AlexLetras } from "./AlexLetras";
import { PizarrasAlex } from "./PizarrasAlex";
import { CartelesAlex } from "./CartelesAlex";
import { AlexFrame } from "./AlexFrame";
import { MarFrame } from "./MarFrame";
import { MarLen } from "./MarLen";
import { AlexLen } from "./AlexLen";
import { CarLen } from "./CarLen";
import { CarFrame } from "./CarFrame";
import { Banderas } from "./Banderas";
import { TeclasMov } from "./TeclasMov";
import { TeclasC } from "./TeclasC";
import { TeclaR } from "./TeclaR";

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
            <Carteles  position={[0,0,-4]} scale={[0.08,0.08,0.08]}/>
            <CarLen position={[3.4,0.1,2]}  scale={[.2,.2,.2]}/>
            <CarFrame position={[-3.4,0.1,2]}  scale={[.2,.2,.2]}/>
            <Car thirdPerson={thirdPerson}/>
            <Banderas position={[0,0.1,-6]}  scale={[.5,.5,.5]}/>
            <TeclasMov position={[-1,.5,4]}  scale={[.2,.2,.2]}/>
            <TeclasC position={[0.5,.5,4.1]}  scale={[.2,.2,.2]}/>
            <TeclaR position={[0.5,.5,3.2]}  scale={[.2,.2,.2]}/>

            {/*Objetos Mariana*/}
            <MarianaLetras position={[10,0,-2]} scale={[1,1,1]}/>
            <PizarrasMa position={[10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <CartelesMariana  position={[10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <MarFrame position={[13.5,0.1,2]}  scale={[.2,.2,.2]}/> 
            <MarLen position={[6,0.1,2]}  scale={[.2,.2,.2]}/> 

            {/*Objetos Alejandro*/}
            <AlexLetras position={[-10.5,.2,-2]} scale={[.9,.9,.9]}/>
            <PizarrasAlex position={[-10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <CartelesAlex position={[-10,0,-4]} scale={[0.08,0.08,0.08]}/>
            <AlexFrame position={[-13,0.1,2]}  scale={[.2,.2,.2]}/> 
            <AlexLen position={[-6,0.1,2]}  scale={[.2,.2,.2]}/>
        </Suspense>      
        </>

    )
}