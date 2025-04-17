import React, { useMemo } from "react";
import * as THREE from "three";

type RoofProps = {
  width: number;
  depth: number;
  height: number;
};

export default function Roof({ width, depth, height }: RoofProps): THREE.BufferGeometry {
  const geometry = useMemo(() => {
    const shape = new THREE.BufferGeometry();

    const hw = width / 2;
    const hd = depth / 2;

    // 6 vértices: base (4) + cumbrera (2)
    const vertices = new Float32Array([
      -hw,
      0,
      -hd, // 0 - back left
      hw,
      0,
      -hd, // 1 - back right
      hw,
      0,
      hd, // 2 - front right
      -hw,
      0,
      hd, // 3 - front left
      0,
      height,
      -hd, // 4 - top back center
      0,
      height,
      hd // 5 - top front center
    ]);

    const indices = [
      // Techo derecho
      1, 2, 5, 1, 5, 4,

      // Techo izquierdo
      3, 0, 4, 3, 4, 5,

      // Parte frontal
      2, 3, 5,

      // Parte trasera
      0, 1, 4
    ];

    shape.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    shape.setIndex(indices);
    shape.computeVertexNormals();

    return shape;
  }, [width, depth, height]);

  return geometry;
}
