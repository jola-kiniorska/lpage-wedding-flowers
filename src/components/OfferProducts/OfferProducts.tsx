import React from "react";
import styles from "./OfferProducts.module.scss";
import { useNavigate } from "react-router-dom";

const OfferProducts = ({
  img,
  page,
  name,
  description,
}: {
  img: string;
  page: string;
  name: string;
  description: string;
}) => {
  let navigate = useNavigate();
  const goToSite = (page) => {
    navigate(page);
  };

  return (
    <div className={styles.products}>
      <div className={styles.product_img}>
        <img
          src={img}
          onClick={() => goToSite(page)}
          alt={"offer-img"}
        ></img>
      </div>
      <div className={styles.product_txt}>
        <p>{name}</p>
        <p>{description}.</p>
      </div>
    </div>
  );
};

export default OfferProducts;
