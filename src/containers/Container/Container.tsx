import React from "react";
import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps ) => {
  return <div className="landing-page">{children}</div>;
};

export default Container;
