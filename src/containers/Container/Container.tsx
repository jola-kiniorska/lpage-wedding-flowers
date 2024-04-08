import React from "react";
import "./Container.scss";

const Container = ({ children }: { children: string }) => {
  return <div className="landing-page">{children}</div>;
};

export default Container;
