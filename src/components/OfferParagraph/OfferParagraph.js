import Paragraph from '../Paragraph/Paragraph';
import styles from './OfferParagraph.module.scss';

const OfferParagraph = props => {

    return (
        <div className={styles.offer_paragraph}>
            <h2>{props.theme}</h2>
            <Paragraph text={props.description} />
        </div>
    )
}

export default OfferParagraph;