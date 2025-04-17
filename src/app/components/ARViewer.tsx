"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
// import House from "./models/House";
// import { ContextWatcher } from "./ContextWatcher";
// import { useState } from "react";
import Model from "./Model";

export default function ARViewer() {
  // const [canvasKey, setCanvasKey] = useState(0);
  // const handleContextLost = () => {
  //   setCanvasKey((prev) => prev + 1); // force remount of <Canvas>
  // };

  return (
    <div className="canvas-container">
      <Canvas>
        {/* <ContextWatcher onContextLost={handleContextLost} /> */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 10, 5]}
          castShadow
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls enableZoom={false} />
        <TransformControls />
        {/* <House /> */}
        <Model
          src={
            document.location.href.indexOf("localhost") > -1
              ? "/models/sofa.glb"
              : "/models/sofa-draco.glb"
          }
        />
      </Canvas>
    </div>
  );
}
