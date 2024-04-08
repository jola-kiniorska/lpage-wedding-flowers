import React from "react";
import "./OfferProducts.scss";
import { useNavigate } from "react-router-dom";

interface OfferProductsProps {
  img: string;
  page: string;
  name: string;
  description: string;
}

const OfferProducts = ({ img, page, name, description }: OfferProductsProps) => {
  let navigate = useNavigate();
  const goToSite = (page) => {
    navigate(page);
  };

  return (
    <div className="el_products">
      <div className="product_image">
        <img src={img} onClick={() => goToSite(page)} alt={"offer-img"}></img>
      </div>
      <div className="product_text">
        <p>{name}</p>
        <p>{description}.</p>
      </div>
    </div>
  );
};

export default OfferProducts;
