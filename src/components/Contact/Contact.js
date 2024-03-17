import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Contact.module.scss";
import flower from "../../img/contact.jpg"

const Contact = () => {
    return (
        <div className={styles.section_contact}>
            <div className={styles.section_element}>
                <img src={flower} alt={'flower'}></img>
            </div>
            <div className={styles.section_element}>
                <Title title='Kontakt'/>
                <Paragraph text='Adres'/>
                <Paragraph text='123 456 789' />
                <Paragraph text='witaj@weddingflowers.pl'/>
            </div>
        </div>
    )
}

export default Contact;