import React from "react";
import "./SocialMediaIcon.scss";

const SocialMediaIcon = ({ icon }: { icon: string }) => {
  return (
    <a className="el_link" href="https://www.instagram.com/">
      <img src={icon} alt={"social-media"}></img>
    </a>
  );
};

export default SocialMediaIcon;
