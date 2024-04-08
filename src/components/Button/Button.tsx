import React from "react";
import "./Button.scss";

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
    <div className="el_button">
      <button onClick={() => scrollToElement(element)}>{name}</button>
    </div>
  );
};

export default Button;
