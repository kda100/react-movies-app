import styles from "./styles.module.css";

/**
 * Generic loading component
 */

function Loading() {
  return (
    <div className={styles.center}>
      <div className="spinner-border" role="status"></div>
    </div>
  );
}

export default Loading;
