import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useControls } from "./useControls";
import { useWheels } from "./useWheels";
import { WheelDebug } from "./WheelDebug";
import { Quaternion, Vector3 } from "three";

export function Car(thirdPerson ){

    let result = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + "/models/car.glb"
      ).scene;
    

    let mesh=useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL+"/Models/car.glb"
    ).scene;

    const position = [-1.5,0,3];
    const width  =0.15;
    const height = 0.07;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs= [width, height, front*2];
    
    const [chassisBody,chassisApi] = useBox(
        () => ({
            allowSleep: false,
            args:chassisBodyArgs,
            mass:150,
            position,
        }),
        useRef(null),
    );

    const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

    const [vehicle, vehicleApi] = useRaycastVehicle(
      () => ({
        chassisBody,
        wheelInfos,
        wheels,
      }),
      useRef(null),
    );
  
    useControls(vehicleApi, chassisApi);

    // camera
    useFrame((state) => {
      if(!thirdPerson) return;
  
      let position = new Vector3(0,0,0);
      position.setFromMatrixPosition(chassisBody.current.matrixWorld);
  
      let quaternion = new Quaternion(0, 0, 0, 0);
      quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);
  
      let wDir = new Vector3(0,0,1);
      wDir.applyQuaternion(quaternion);
      wDir.normalize();
  
      let cameraPosition = position.clone().add(wDir.clone().multiplyScalar(1).add(new Vector3(1, 2, 1)));
      
      wDir.add(new Vector3(0, 0.2, 0));
      state.camera.position.copy(cameraPosition);
      state.camera.lookAt(position);
    });
        
    useEffect(()=>{
        mesh.scale.set(0.0012,0.0012,0.0012);
        mesh.children[0].position.set(-365,-18,-67);
    },[mesh]);

    useEffect(() => {
        if (!result) return;
    
        let mesh = result;
        mesh.scale.set(0.0012, 0.0012, 0.0012);
    
        mesh.children[0].position.set(-365, -18, -67);
      }, [result]);

    return (
    <group ref={vehicle} name="vehicle">
      <group ref={chassisBody} name="chassisBody">
        <primitive object={result} rotation-y={Math.PI} position={[0, -0.01, 0]}/>
      </group>

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
    );
}