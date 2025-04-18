"use client";

import { useEffect, useRef } from "react";
import Path from "./Path";
import { $ } from "@/app/lib/dom-selector";
import "./styles.css";

export default function SVGDraw() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!svgRef.current) return;

      const rect = svgRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = (window.innerHeight * 2) / 3;

      const distanceFromCenter = elementCenter - viewportCenter;
      const percentageInCenter =
        (rect.height / 2 - distanceFromCenter) / rect.height;

      const path = $<SVGPathElement>(".svg-draw path");

      if (!path) return;

      const length = path.getTotalLength();
      const visibleLength = length * percentageInCenter;

      if (percentageInCenter >= 0 && percentageInCenter <= 1) {
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = (length - visibleLength).toString();
      }

      if (percentageInCenter < 0) {
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = length.toString();
      }

      if (percentageInCenter > 1) {
        path.style.strokeDashoffset = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Path
      ref={svgRef}
      className="svg-draw absolute top-0"
      width="100%"
      height="100%"
    />
  );
}
