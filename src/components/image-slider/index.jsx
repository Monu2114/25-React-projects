import React from "react";
import "../image-slider/styles.css";
const ImageSlider = () => {
  return (
    <div className="images">
      {[...Array(7)].map((_, index) => {
        return (
          <img
            key={index}
            src={`src/assets/Image-${index + 1}.jpeg`}
            alt={`Image ${index + 1}`}
            className="slider-image"
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
