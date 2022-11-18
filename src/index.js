import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Canvas} from '@react-three/fiber';
import {Scene} from './Scene';
import { Physics } from '@react-three/cannon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Canvas>
    <Physics
      broadphase ="SAP"
      gravity={[0,-2.6,0]}
      >
      <Scene/>
    </Physics>
  </Canvas>
);
