import styles from "./OfferProducts.module.scss";
import { useNavigate } from "react-router-dom";

const OfferProducts = props => {

    let navigate = useNavigate();
    const goToSite = (page) => {
        navigate(page);
    }

    return (
        <div className={styles.products}>
            <div className={styles.product_img}>
                <img src={props.img} onClick={() => goToSite(props.page)} alt={'offer-img'}></img>
            </div>
            <div className={styles.product_txt}>
                <p>{props.name}</p>
                <p>{props.description}.</p>
            </div>
        </div>
    )
}

export default OfferProducts; 