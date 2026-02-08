import React, { useState } from "react";
import accordionData from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelection = (id) => {
    let copy = [...multiple];
    const index = copy.indexOf(id);

    index === -1 ? copy.push(id) : copy.splice(index, 1);
    setMultiple(copy);
  };

  const isOpen = (id) =>
    enableMultiSelection ? multiple.includes(id) : selected === id;

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Accordian</h2>

          <button
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
            className="px-5 py-2 rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {enableMultiSelection ? "Single Select" : "Multi Select"}
          </button>
        </div>

        <div className="space-y-4">
          {accordionData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Title */}
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(item.id)
                    : handleSingleSelection(item.id)
                }
                className="flex justify-between items-center p-5 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>

                <span
                  className={`text-2xl font-bold transition-transform duration-300 ${
                    isOpen(item.id)
                      ? "rotate-45 text-indigo-600"
                      : "text-gray-400"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen(item.id)
                    ? "grid-rows-[1fr] opacity-100 px-5 pb-5"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
