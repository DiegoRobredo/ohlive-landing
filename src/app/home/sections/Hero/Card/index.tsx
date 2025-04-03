"use client";

import { useEffect } from "react";
import { $ } from "@/app/lib/dom-selector";
import "./styles.css";

export default function MobileCard() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("card-motion-class");
        } else {
          entries[0].target.classList.remove("card-motion-class");
        }
      },
      { rootMargin: "-50% 0px" }
    );

    const $card = $(".card-class") as HTMLImageElement;

    observer.observe($card);
  }, []);

  return (
    <article className="card-class ml-auto mr-auto mt-4 mb-4">
      <img
        src="./images/ohlive-mobile.png"
        alt="Móvil mostrando la app Ohlive"
      />
      <img
        src="./images/sofa_sin_fondo_basico.png"
        alt="Sofá sin fondo básico"
      />
    </article>
  );
}
