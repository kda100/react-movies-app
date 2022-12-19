import React from "react";
import styles from "./styles.module.css";

/**
 * Generic error component
 */

function Error(props) {
  return <div className={styles.center}>{props.message}</div>;
}

export default Error;
