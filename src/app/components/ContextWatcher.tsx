import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function ContextWatcher({
  onContextLost
}: {
  onContextLost: () => void;
}) {
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    const handleContextLost = (e: Event) => {
      console.warn("⚠️ WebGL context lost!");
      e.preventDefault(); // prevents default browser behavior
      gl.getContext()?.getExtension("WEBGL_lose_context")?.restoreContext();
    };

    canvas.addEventListener("webglcontextlost", handleContextLost);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost);
    };
  }, [gl, onContextLost]);

  return null;
}
