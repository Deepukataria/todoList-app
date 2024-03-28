import React from "react";
import styles from "../styles/modules/title.module.scss";

const PageTitle = ({ title, ...rest }) => {
  return (
    <p className={styles.title} {...rest}>
      {title}
    </p>
  );
};

export default PageTitle;
