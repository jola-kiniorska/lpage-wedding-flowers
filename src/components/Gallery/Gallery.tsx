import React from "react";
import styles from "./Gallery.module.scss";
import Button from "../Button/Button.tsx";

const Gallery = () => {
  return (
    <div className={styles.section_gallery}>
      <div className={styles.gallery_txt}>
        <p>Zobacz nasze realizacje</p>
        <Button name="Galeria" element=".react-multi-carousel-track" />
      </div>
    </div>
  );
};

export default Gallery;
