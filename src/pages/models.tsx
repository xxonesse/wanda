import { useState, Suspense } from "react";
import './Models.css';

import Earth from '../public/Earth';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Models() {
  return(
    <div id="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <OrbitControls />
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Models;