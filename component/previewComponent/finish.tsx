import styles from "../../styles/preview.module.scss";
const Finish = () => {
  return (
    <div className={styles.typeContainer} style={{ marginTop: "5em" }}>
      <div className={styles.previewQuestion}>You're Done !</div>
      <div className={styles.previewDescription}>
        Thank you for your responses. You can close this tab.
      </div>
    </div>
  );
};

export default Finish;
