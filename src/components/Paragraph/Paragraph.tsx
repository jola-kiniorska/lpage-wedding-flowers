import React from "react";
import "./Paragraph.scss";

const Paragraph = ({ text }: { text: string }) => {
  return (
    <div className="el_paragraph">
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
