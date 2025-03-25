"use client";

import React, { useState } from "react";
import "./styles.css";

export default function MenuButton() {
  const [buttonCross, setButtonCross] = useState(false);

  return (
    <button
      data-menu-button
      className={`menu-button ${
        buttonCross ? "button-cross" : ""
      } flex flex-col border-0 w-[1.95rem] h-[1.95rem] bg-transparent gap-[0.55rem] sm:hidden`}
      onClick={() => setButtonCross(!buttonCross)}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
