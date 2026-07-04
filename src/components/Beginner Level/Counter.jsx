import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-[80vh] items-center justify-center bg-gray-100">
      <div className="w-80 rounded-xl bg-white p-8 shadow-lg text-center">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Counter App</h1>

        <p className="mb-6 text-5xl font-bold text-blue-600">{count}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-green-500 px-5 py-2 text-white font-semibold transition hover:bg-green-600"
          >
            +
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-5 py-2 text-white font-semibold transition hover:bg-red-600"
          >
            -
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-gray-700 px-5 py-2 text-white font-semibold transition hover:bg-gray-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
