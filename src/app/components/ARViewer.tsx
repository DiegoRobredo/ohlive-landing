"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function ARViewer() {

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <Model src={"/models/sofa.glb"} />
      </Canvas>
    </div>
  );
}
