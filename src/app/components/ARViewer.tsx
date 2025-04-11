"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <Model
          src={
            window.location.href.indexOf("localhost") > -1
              ? "/models/sofa.glb"
              : "/models/sofa-draco.glb"
          }
        />
      </Canvas>
    </div>
  );
}
