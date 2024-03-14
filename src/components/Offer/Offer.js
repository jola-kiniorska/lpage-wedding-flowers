import OfferProducts from "../OfferProducts/OfferProducts";
import Title from "../Title/Title";
import styles from "./Offer.module.scss";

const Offer = props => {
    return (
        <div className={styles.section_offer}>
            <Title/>
            <div className={styles.products}>
                <OfferProducts/>
                <OfferProducts/>
                <OfferProducts/>
            </div>
        </div>
    )
}

export default Offer;