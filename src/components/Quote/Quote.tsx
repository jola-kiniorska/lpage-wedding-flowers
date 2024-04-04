import React from "react";
import styles from "./Quote.module.scss";

const Quote = ({ quote }: { quote: string }) => {
  return (
    <div className={styles.quote}>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
