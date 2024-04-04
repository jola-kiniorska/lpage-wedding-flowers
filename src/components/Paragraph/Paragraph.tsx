import React from "react";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ text }: { text: string }) => {
  return (
    <div className={styles.paragraph}>
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;
