import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColor = (length) => Math.floor(Math.random() * length);

  // HEX
  const generateRandomHEXColor = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(hexColor);
  };

  // RGB
  const generateRandomRGBColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="h-[80vh] flex flex-col items-center justify-center gap-8 transition-all duration-500"
    >
      {/* Text Section */}
      <div className="text-center text-white select-none">
        <h2 className="text-4xl md:text-5xl font-semibold opacity-80 mb-4">
          {typeOfColor.toUpperCase()} Color
        </h2>

        <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-2xl">
          {color}
        </h1>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition"
        >
          HEX
        </button>

        <button
          onClick={() => setTypeOfColor("rgb")}
          className="px-5 py-2 rounded-xl bg-pink-600 text-white hover:bg-pink-700 active:scale-95 transition"
        >
          RGB
        </button>

        <button
          onClick={
            typeOfColor === "hex"
              ? generateRandomHEXColor
              : generateRandomRGBColor
          }
          className="px-6 py-2 rounded-xl bg-white/20 backdrop-blur border-white/40 text-white transition"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
