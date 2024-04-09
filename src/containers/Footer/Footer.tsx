import React from "react";
import "./Footer.scss";
import SocialMediaIcon from "../../components/SocialMediaIcon/SocialMediaIcon.tsx";
import facebook_icon from "../../img/icons/facebook_icon.svg";
import instagram_icon from "../../img/icons/instagram_icon.svg";
import linkedin_icon from "../../img/icons/linkedin_icon.svg";
import twitter_icon from "../../img/icons/twitter_icon.svg";

const Footer = () => {
  return (
    <div className="section section_footer">
      <div className="footer_icons">
        <SocialMediaIcon
          icon={facebook_icon}
          link={"https://www.facebook.com/"}
        />
        <SocialMediaIcon
          icon={instagram_icon}
          link={"https://www.instagram.com/"}
        />
        <SocialMediaIcon
          icon={linkedin_icon}
          link={"https://www.linkedin.com/"}
        />
        <SocialMediaIcon 
          icon={twitter_icon} 
          link={"https://twitter.com/"} 
        />
      </div>
      <p className="footer_text">
        Copyright 2024 rights reserved. Powered by React
      </p>
    </div>
  );
};

export default Footer;
