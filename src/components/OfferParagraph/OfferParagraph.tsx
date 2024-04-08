import React from "react";
import Paragraph from "../Paragraph/Paragraph.tsx";
import "./OfferParagraph.scss";

interface OfferParagraphProps {
  theme: string;
  description: string;
}

const OfferParagraph = ({ theme, description }: OfferParagraphProps) => {
  return (
    <div className="el_offer_paragraph">
      <h2>{theme}</h2>
      <Paragraph text={description} />
    </div>
  );
};

export default OfferParagraph;
