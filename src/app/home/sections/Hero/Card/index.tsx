"use client";

// import { useEffect } from "react";
// import { $ } from "@/app/lib/dom-selector";
import ARViewer from "@/app/components/ARViewer";
import Img from "next/image";
import "./styles.css";

export default function MobileCard() {
  return (
    <article className="card-class card-motion-class ml-auto mr-auto mt-4 mb-4">
      <Img
        src="/images/ohlive-mobile.png"
        alt="Móvil mostrando la app Ohlive"
        width={300}
        height={300}
      />
      <ARViewer />
    </article>
  );
}
