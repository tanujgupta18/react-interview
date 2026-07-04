import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-5">Search Fruits</h1>

      <input
        type="text"
        placeholder="Search Fruit"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 rounded px-3 py-2 w-64 mb-5"
      />

      <ul className="w-64">
        {filteredFruits.map((fruit, index) => (
          <li key={index} className="border-b py-2">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
