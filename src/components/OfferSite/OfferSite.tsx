import React from "react";
import "./OfferSite.scss";
import Title from "../Title/Title.tsx";
import OfferParagraph from "../OfferParagraph/OfferParagraph.tsx";

interface OfferSiteProps {
  offerSiteImg: string;
  imgDescription: string;
  title: string;
  theme_1: string;
  theme_2: string;
  theme_3: string;
  theme_4: string;
  description_1: string;
  description_2: string;
  description_3: string;
  description_4: string;
}

const OfferSite = ({
  offerSiteImg,
  imgDescription,
  title,
  theme_1,
  theme_2,
  theme_3,
  theme_4,
  description_1,
  description_2,
  description_3,
  description_4,
}: OfferSiteProps) => {
  
  return (
    <div className="offer_site">
      <div className="section_element">
        <img src={offerSiteImg} alt={imgDescription}></img>
      </div>
      <div className="section_element">
        <Title title={title} />
        <div className="offer_description">
          <OfferParagraph theme={theme_1} description={description_1} />
          <OfferParagraph theme={theme_2} description={description_2} />
          <OfferParagraph theme={theme_3} description={description_3} />
          <OfferParagraph theme={theme_4} description={description_4} />
        </div>
      </div>
    </div>
  );
};

export default OfferSite;
