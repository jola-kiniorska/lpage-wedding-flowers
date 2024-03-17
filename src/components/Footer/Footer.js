import Paragraph from "../Paragraph/Paragraph";
import styles from "./Footer.module.scss";
import facebook_icon from "../../img/icons/facebook_icon.svg"
import instagram_icon from "../../img/icons/instagram_icon.svg"
import linkedin_icon from "../../img/icons/linkedin_icon.svg"
import twitter_icon from "../../img/icons/twitter_icon.svg"

const Footer = () => {
    return (
        <div className={styles.section_footer}>
            <Paragraph text='Follow us on'/>
            <div className={styles.footer_icons}>
                <a href='https://www.instagram.com/'>
                    <img src={instagram_icon} alt={instagram_icon}></img>
                </a>
                <a href='https://www.facebook.com/'>
                    <img src={facebook_icon} alt={facebook_icon}></img>
                </a>
                <a href='https://twitter.com/'>
                    <img src={twitter_icon} alt={twitter_icon}></img>
                </a>
                <a href='https://www.linkedin.com/'>
                    <img src={linkedin_icon} alt={linkedin_icon}></img>
                </a>  
            </div>
            <p className={styles.copyright}>Copyright 2024 rights reserved. Powered by React</p>
        </div>
    )
}

export default Footer;