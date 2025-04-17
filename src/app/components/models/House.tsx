import React, { useMemo } from "react";
import { CSG } from "three-csg-ts";
import * as THREE from "three";
// import Roof from "./Roof";

export default function House() {
  const mesh = useMemo(() => {
    const wallThickness = 0.1;
    const width = 2;
    const depth = 2;
    const height = 2;
    // const roofHeight = 1.5;

    // Cubo base
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshNormalMaterial()
    );
    base.position.set(0, 1, 0); // Altura Y=1 para que apoye en el suelo

    // Cubo interior (un poco más pequeño)
    const inner = new THREE.Mesh(
      new THREE.BoxGeometry(
        width - wallThickness * 2,
        height - wallThickness,
        depth - wallThickness * 2
      )
    );
    inner.position.set(0, 1 + wallThickness / 2, 0); // Ligeramente más alto

    // Puerta
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1, 0.2));
    door.position.set(0, 0.5, 1.01);

    // Ventanas
    const window1 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.2));
    window1.position.set(-0.7, 1.4, 1.01);

    const window2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.2));
    window2.position.set(0.7, 1.4, 1.01);

    const roofGeometry = new THREE.BufferGeometry();

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

    roofGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(vertices, 3)
    );
    roofGeometry.setIndex(indices);
    roofGeometry.computeVertexNormals();

    const roof = new THREE.Mesh(roofGeometry, new THREE.MeshNormalMaterial());
    roof.position.set(0, 2, 0);
    // const roof = new THREE.Mesh(roofGeometry);

    base.updateMatrix();
    inner.updateMatrix();
    door.updateMatrix();
    window1.updateMatrix();
    window2.updateMatrix();
    roof.updateMatrix();

    // CSG: restamos interior + puerta + ventanas
    let houseCSG = CSG.subtract(base, inner);
    houseCSG = CSG.subtract(houseCSG, door);
    houseCSG = CSG.subtract(houseCSG, window1);
    houseCSG = CSG.subtract(houseCSG, window2);
    houseCSG = CSG.union(houseCSG, roof);

    return houseCSG;

    // const box = new THREE.Mesh(
    //   new THREE.BoxGeometry(2, 2, 2),
    //   new THREE.MeshNormalMaterial()
    // );
    // const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8));

    // // Make sure the .matrix of each mesh is current
    // box.updateMatrix();
    // sphere.updateMatrix();

    // // Perform CSG operations
    // // The result is a THREE.Mesh that you can add to your scene...
    // const subRes = CSG.subtract(box, sphere);

    // return subRes;
  }, []);

  return <primitive object={mesh} rotation={[Math.PI / 8, -Math.PI / 3, 0]} />;
}
