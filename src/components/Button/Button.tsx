import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  element: string;
  name: string;
}

const Button = ({ element, name }: ButtonProps) => {
  const scrollToElement = (el: string) => {
    const section = document.querySelector(el);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className={styles.button}>
      <button onClick={() => scrollToElement(element)}>{name}</button>
    </div>
  );
};

export default Button;
