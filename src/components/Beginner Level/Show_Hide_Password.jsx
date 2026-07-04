import React, { useState } from "react";

const Show_Hide_Password = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-5">Show / Hide Password</h1>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        className="border border-gray-400 rounded px-3 py-2 mb-4 w-64"
      />

      <button
        onClick={() => setShowPassword(!showPassword)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default Show_Hide_Password;
