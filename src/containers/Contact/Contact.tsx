import React from "react";
import "./Contact.scss";
import contactImg from "../../img/contact.jpg";
import Title from "../../components/Title/Title.tsx";
import Paragraph from "../../components/Paragraph/Paragraph.tsx";
import Address from "../../components/Address/Address.tsx";
import Line from "../../components/Line/Line.tsx";

const Contact = () => {
  return (
    <div className="section section_6">
      <div className="section_element">
        <img src={contactImg} alt={"flowers-on-the-book"}></img>
      </div>
      <div className="section_element">
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
