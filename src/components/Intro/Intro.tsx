import React from "react";
import styles from "./Intro.module.scss";
import Paragraph from "../Paragraph/Paragraph.tsx";
import Title from "../Title/Title.tsx";
import Quote from "../Quote/Quote.tsx";
import imgWoman from "../../img/woman.jpg";

const Intro = () => {
  return (
    <div className={styles.section_intro}>
      <div className={styles.section_element}>
        <img src={imgWoman} alt={"woman-with-flowers"} />
      </div>
      <div className={styles.section_element}>
        <Quote quote="Ziemia śmieje się kwiatami – Ralph Waldo Emerson" />
        <Title title="Małgorzata Kowalczyk" />
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
      </div>
    </div>
  );
};

export default Intro;
