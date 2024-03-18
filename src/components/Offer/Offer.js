import styles from "./Offer.module.scss";
import imgOffer1 from "../../img/offers_1.jpg";
import imgOffer2 from "../../img/offers_2.jpg";
import imgOffer3 from "../../img/offers_3.jpg";
import Title from "../Title/Title";
import OfferProducts from "../OfferProducts/OfferProducts";

const Offer = () => {
    return (
        <div className={styles.section_offer}>
            <Title title="Nasza oferta" />
            <div className={styles.products}>
                <OfferProducts img={imgOffer1} name='Wianki' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                <OfferProducts img={imgOffer2} name='Bukiety' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                <OfferProducts img={imgOffer3} name='Butonierki' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
            </div>
        </div>
    )
}

export default Offer;