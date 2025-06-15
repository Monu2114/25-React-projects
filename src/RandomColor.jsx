import React from "react";
import { useState } from "react";
const RandomColor = () => {
  const [color, setColor] = useState("");
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    setColor(rgb);
  };
  const changeColorHex = () => {
    const r = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const g = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    const b = Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0");
    setColor(`#${r}${g}${b}`);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="button" onClick={changeColor}>
        Generate Random RGB
      </button>
      <button className="button" onClick={changeColorHex}>
        Generate Random HEX
      </button>
      {color}
    </div>
  );
};

export default RandomColor;
