import styles from "./styles.module.css";

function Error(props) {
  return <div className={styles.center}>{props.message}</div>;
}

export default Error;
