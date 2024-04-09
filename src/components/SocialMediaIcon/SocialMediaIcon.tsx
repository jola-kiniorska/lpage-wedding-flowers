import React from "react";
import "./SocialMediaIcon.scss";

interface SocialMediaIconProps {
  icon: string;
  link: string;
}

const SocialMediaIcon = ({ icon, link }: SocialMediaIconProps) => {
  return (
    <a className="el_link" href={link}>
      <img src={icon} alt={"social-media"}></img>
    </a>
  );
};

export default SocialMediaIcon;
