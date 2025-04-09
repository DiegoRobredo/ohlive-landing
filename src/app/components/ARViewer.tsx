"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Model from "./Model";

export default function ARViewer() {
  const ref = useRef(null);

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} />
        <Model src={"/models/sofa.glb"} />
        {/* <Gltf src="@/models/sofa.glb" /> */}

        {/* <mesh>
          <boxGeometry attach="geometry" args={[2, 2, 2]} />
          <meshStandardMaterial attach="material" color={"green"} />
        </mesh> */}
      </Canvas>
    </div>
  );
}
