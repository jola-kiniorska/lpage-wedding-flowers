import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Contact.module.scss";
import flower from "../../img/contact.jpg"

const Contact = props => {
    return (
        <div className={styles.section_contact}>
            <div className={styles.section_element}>
                <img src={flower} alt={'flower'}></img>
            </div>
            <div className={styles.section_element}>
                <Title/>
                <Paragraph />
            </div>
        </div>
    )
}

export default Contact;