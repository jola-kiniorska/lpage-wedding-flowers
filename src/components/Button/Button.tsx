import React from "react";
import styles from "./Button.module.scss";

const Button = ({ element, name }: { element: string; name: string }) => {
  const scrollToElement = (element) => {
    const section = document.querySelector(element);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={styles.button}>
      <button onClick={() => scrollToElement(element)}>{name}</button>
    </div>
  );
};

export default Button;
