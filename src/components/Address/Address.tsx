import React from "react";
import styles from "./Address.module.scss";

const Address = ({
  text_one,
  text_two,
  text_three,
}: {
  text_one: string;
  text_two: string;
  text_three: string;
}) => {
  return (
    <div className={styles.address}>
      <p>
        {text_one}
        <br />
        {text_two}
        <br />
        {text_three}
      </p>
    </div>
  );
};

export default Address;
