import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children }: { children: string }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
