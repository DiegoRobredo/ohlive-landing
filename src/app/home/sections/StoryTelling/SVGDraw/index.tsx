"use client";

import { useEffect, useRef } from "react";
import Path from "./Path";
import { $ } from "@/app/lib/dom-selector";
import "./styles.css";

export default function SVGDraw() {
  const svgRef = useRef<SVGGeometryElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;

      const distanceFromCenter = elementCenter - viewportCenter;
      const percentageInCenter =
        (rect.height / 2 - distanceFromCenter) / rect.height;

      const path = document.querySelector(".svg-draw path") as SVGPathElement;
      const length = path.getTotalLength();

      if (percentageInCenter >= 0 && percentageInCenter <= 1) {
        path.style.strokeDasharray = (length * percentageInCenter).toString();
        path.style.strokeDashoffset = "0";
        // path.style.strokeDashoffset = (length * percentageInCenter).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Path fill="#ffffff" ref={svgRef} className="svg-draw" />;
}
