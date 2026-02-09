import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ numberOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="h-[60vh] flex flex-col gap-4 items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
      <h3 className="text-4xl font-semibold">Star Rating</h3>
      <div className="flex gap-3 bg-white p-6 rounded-2xl shadow-lg">
        {[...Array(numberOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              size={40}
              className={`
                cursor-pointer
                transition-all
                duration-200
                ${
                  index <= (hover || rating)
                    ? "text-yellow-400 scale-110"
                    : "text-gray-300"
                }
              `}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
