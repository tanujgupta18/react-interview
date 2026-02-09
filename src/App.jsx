import React from "react";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/Random Color Generator/RandomColor";
import StarRating from "./components/Star Rating/StarRating";

const App = () => {
  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating />
    </div>
  );
};

export default App;
