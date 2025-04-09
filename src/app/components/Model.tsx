import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import { Object3D } from "three";

export default function Model({ src }: { src: string }) {
  const gltf = useGLTF(src);
  const ref = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useFrame(() => {
    if (ref.current) {
      (ref.current as Object3D).rotation.y -= isMouseDown ? 0 : 0.01; // rotación en eje Y
    }
  });

  return (
    <primitive
      onMouseDown={() => {
        console.log("Mouse down");
        setIsMouseDown(true);
      }}
      onMouseUp={() => {
        console.log("Mouse up");
        setIsMouseDown(false);
      }}
      onClick={() => {
        console.log("Click");
      }}
      ref={ref}
      object={gltf.scene}
      scale={1.5}
      rotation={[Math.PI / 8, -Math.PI / 3, 0]}
    />
  );
}
