import React from "react";
import styles from "./SocialMediaIcon.module.scss";

const SocialMediaIcon = ({ icon }: { icon: string }) => {
  return (
    <a className={styles.social_media_link} href="https://www.instagram.com/">
      <img src={icon} alt={"social-media"}></img>
    </a>
  );
};

export default SocialMediaIcon;
