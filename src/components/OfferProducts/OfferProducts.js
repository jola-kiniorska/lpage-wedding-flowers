import styles from "./OfferProducts.module.scss";
import offer from "../../img/offers_3.jpg"

const OfferProducts = props => {
    return (
        <div className={styles.products}>
            <img src={offer} alt={'offer'}></img>
            <p>Wianki</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    )
}

export default OfferProducts;