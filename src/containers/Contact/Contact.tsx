import React from "react";
import styles from "./Contact.module.scss";
import contactImg from "../../img/contact.jpg";
import Title from "../../components/Title/Title.tsx";
import Paragraph from "../../components/Paragraph/Paragraph.tsx";
import Address from "../../components/Address/Address.tsx";
import Line from "../../components/Line/Line.tsx";

const Contact = () => {
  return (
    <div className={styles.section_contact}>
      <div className={styles.section_element}>
        <img src={contactImg} alt={"flowers-on-the-book"}></img>
      </div>
      <div className={styles.section_element}>
        <Title title="Skontaktuj się z nami!" />
        <Line />
        <Address
          text_one="Wedding flowers"
          text_two="ul. Dowolna 123"
          text_three="01-234 Miasto"
        />
        <Paragraph text="123 456 789" />
        <Paragraph text="witaj@weddingflowers.pl" />
      </div>
    </div>
  );
};

export default Contact;
