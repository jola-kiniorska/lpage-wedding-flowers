import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import styles from './Intro.module.scss';
import woman from '../../img/offers_2.jpg'

const Intro = props => {
    return (
        <div className={styles.section_intro}>
            <div className={styles.section_element}>
                <img src={woman} alt={'woman'}/>
            </div>
            <div className={styles.section_element}>
                <p>Ziemia śmieje się kwiatami. – Ralph Waldo Emerson</p>
                <Title/>
                <Paragraph/>
            </div>
        </div>
    )
}

export default Intro;