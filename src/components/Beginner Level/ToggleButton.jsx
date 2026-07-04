import React, { useState } from "react";

const ToggleButton = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-100">
      <div className="w-80 rounded-xl bg-white p-8 text-center shadow-lg">
        <h1
          className={`mb-6 text-4xl font-bold ${
            show ? "text-green-600" : "text-red-600"
          }`}
        >
          {show ? "ON" : "OFF"}
        </h1>

        <button
          onClick={() => setShow(!show)}
          className={`rounded-lg px-6 py-2 text-white font-semibold transition ${
            show
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
