import React from "react";
import "./Gallery.scss";
import Button from "../../components/Button/Button.tsx";

const Gallery = () => {
  return (
    <div className="section section_4">
      <div className="gallery_text">
        <p>Zobacz nasze realizacje</p>
        <Button name="Galeria" element=".react-multi-carousel-track" />
      </div>
    </div>
  );
};

export default Gallery;
