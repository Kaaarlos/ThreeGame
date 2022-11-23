import './index.css'
import * as THREE from "three"

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Canvas} from '@react-three/fiber';
import {Scene} from './Scene';
import { Physics } from '@react-three/cannon';

import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);
