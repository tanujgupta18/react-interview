import React from "react";
import Accordian from "./components/Accordian/Accordian";
import RandomColor from "./components/Random Color Generator/RandomColor";
import StarRating from "./components/Star Rating/StarRating";
import ImageSlider from "./components/Image Slider/ImageSlider";

const App = () => {
  return (
    <div>
      <Accordian />
      <RandomColor />
      <StarRating />
      <ImageSlider />
    </div>
  );
};

export default App;
