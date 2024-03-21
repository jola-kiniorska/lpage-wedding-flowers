import styles from './OfferSite.module.scss';
import Title from '../Title/Title';
import OfferParagraph from '../OfferParagraph/OfferParagraph';

const OfferSite = (props) => {
    return (
        <div className={styles.offer_site}>
            <div className={styles.section_element}>
                <img src={props.offerSiteImg} alt={props.imgDescription}></img>
            </div>
            <div className={styles.section_element}>
                <Title title={props.title} />
                <div className={styles.offer_description}>
                    <OfferParagraph theme={props.theme_1} description={props.description_1} />
                    <OfferParagraph theme={props.theme_2} description={props.description_2} />
                    <OfferParagraph theme={props.theme_3} description={props.description_3} />
                    <OfferParagraph theme={props.theme_4} description={props.description_4} />
                </div>

            </div>
        </div>
    )
}

export default OfferSite;