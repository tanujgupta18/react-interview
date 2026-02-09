import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5",
    );
    const data = await response.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return <p>Loading...</p>;

  return (
    <div className="h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="relative w-150 h-100">
        <img
          className="w-full h-full object-cover rounded-xl shadow-lg"
          src={images[currentSlide].download_url}
          alt=""
        />
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
