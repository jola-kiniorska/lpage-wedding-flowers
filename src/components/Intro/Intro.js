import styles from './Intro.module.scss';
import Paragraph from "../Paragraph/Paragraph";
import Title from "../Title/Title";
import Quote from "../Quote/Quote";
import imgWoman from '../../img/woman.jpg'


const Intro = props => {
    return (
        <div className={styles.section_intro}>
            <div className={styles.section_element}>
                <img src={imgWoman} alt={'woman-with-flowers'}/>
            </div>
            <div className={styles.section_element}>
                <Quote/>
                <Title title='Małgorzata Kowalczyk'/>
                <Paragraph/>
            </div>
        </div>
    )
}

export default Intro;