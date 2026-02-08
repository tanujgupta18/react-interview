import React, { useState } from "react";
import accordionData from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-blue-100 p-6 font-poppins">
      <div className="w-full max-w-2xl space-y-4">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <div
                onClick={() => handleSingleSelection(item.id)}
                className="flex justify-between items-center cursor-pointer p-5"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>

                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    selected === item.id
                      ? "rotate-45 text-indigo-600"
                      : "text-gray-500"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  selected === item.id
                    ? "grid-rows-[1fr] opacity-100 p-5 pt-0"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No Data Found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
