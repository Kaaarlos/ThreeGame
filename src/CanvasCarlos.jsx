
import React from 'react';
import './index.css'
import * as THREE from "three"

import {Canvas} from '@react-three/fiber';
import {Scene} from './Scene';
import { Physics } from '@react-three/cannon';

import '../src/Styles/Carlos.css';


export function CanvasCarlos() {
    return (
    <>
        <Canvas colorManagement shadowMap shadows="true" 
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.7,
          }}>
    
          <Physics
            broadphase ="SAP"
            gravity={[0,-2.6,0]}
            >
            <Scene/>
          </Physics>
        </Canvas>
        {/* <div className="controls">
            <p>press w a s d to move</p>
            <p>press c to swap camera</p>
            <p>press r to reset</p>
            <p>press arrows for flips</p>
        </div> */}
    </>
    );
  }
  
  export default CanvasCarlos;