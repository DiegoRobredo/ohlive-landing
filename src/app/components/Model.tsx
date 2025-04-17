"use client";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Object3D } from "three";

useGLTF.preload("/models/sofa-draco.glb");

export default function Model({ src }: { src: string }) {
  if (!document.location.href.includes("localhost")) {
    src = src.replace(".glb", "-draco.glb");
  }
  
  const gltf = useGLTF(src);
  const ref = useRef(null);

  useFrame(() => {
    if (ref.current) {
      (ref.current as Object3D).rotation.y -= 0.01; // rotación en eje Y
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={1.5}
      rotation={[Math.PI / 8, -Math.PI / 3, 0]}
    />
  );
}
