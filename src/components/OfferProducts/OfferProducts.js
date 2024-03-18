import styles from "./OfferProducts.module.scss";

const OfferProducts = props => {
    return (
        <div className={styles.products}>
            <div className={styles.product_img}>
                <img src={props.img} alt={'offer-img'}></img>
            </div>
            <div className={styles.product_txt}>
                <p>{props.name}</p>
                <p>{props.description}.</p>
            </div>
        </div>
    )
}

export default OfferProducts; 