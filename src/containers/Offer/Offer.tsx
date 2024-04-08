import React from "react";
import styles from "./Offer.module.scss";
import Title from "../../components/Title/Title.tsx";
import OfferProducts from "../../components/OfferProducts/OfferProducts.tsx";
import imgOffer1 from "../../img/offers_1.jpg";
import imgOffer2 from "../../img/offers_2.jpg";
import imgOffer3 from "../../img/offers_3.jpg";

const Offer = () => {
  return (
    <div className={styles.section_offer}>
      <Title title="Nasza oferta" />
      <div className={styles.products}>
        <OfferProducts
          img={imgOffer1}
          name="Wianki"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          page="/offer-flower-crown"
        />
        <OfferProducts
          img={imgOffer2}
          name="Bukiety"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          page="/offer-bouquet"
        />
        <OfferProducts
          img={imgOffer3}
          name="Butonierki"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          page="/offer-buttonhole"
        />
      </div>
    </div>
  );
};

export default Offer;
