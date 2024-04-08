import React from "react";
import styles from "./Footer.module.scss";
import Paragraph from "../../components/Paragraph/Paragraph.tsx";
import SocialMediaIcon from "../../components/SocialMediaIcon/SocialMediaIcon.tsx";
import facebook_icon from "../../img/icons/facebook_icon.svg";
import instagram_icon from "../../img/icons/instagram_icon.svg";
import linkedin_icon from "../../img/icons/linkedin_icon.svg";
import twitter_icon from "../../img/icons/twitter_icon.svg";

const Footer = () => {
  return (
    <div className={styles.section_footer}>
      <Paragraph text="Follow us on" />
      <div className={styles.footer_icons}>
        <SocialMediaIcon icon={facebook_icon} />
        <SocialMediaIcon icon={instagram_icon} />
        <SocialMediaIcon icon={linkedin_icon} />
        <SocialMediaIcon icon={twitter_icon} />
      </div>
      <p className={styles.copyright_text}>
        Copyright 2024 rights reserved. Powered by React
      </p>
    </div>
  );
};

export default Footer;
