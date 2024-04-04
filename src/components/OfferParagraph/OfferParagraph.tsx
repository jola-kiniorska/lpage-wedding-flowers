import React from "react";
import Paragraph from "../Paragraph/Paragraph.tsx";
import styles from "./OfferParagraph.module.scss";

interface OfferParagraphProps {
  theme: string;
  description: string;
}

const OfferParagraph = ({ theme, description }: OfferParagraphProps) => {
  return (
    <div className={styles.offer_paragraph}>
      <h2>{theme}</h2>
      <Paragraph text={description} />
    </div>
  );
};

export default OfferParagraph;
