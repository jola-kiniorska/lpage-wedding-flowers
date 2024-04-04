import React from "react";
import Paragraph from "../Paragraph/Paragraph.tsx";
import styles from "./OfferParagraph.module.scss";

const OfferParagraph = ({
  theme,
  description,
}: {
  theme: string;
  description: string;
}) => {
  return (
    <div className={styles.offer_paragraph}>
      <h2>{theme}</h2>
      <Paragraph text={description} />
    </div>
  );
};

export default OfferParagraph;
