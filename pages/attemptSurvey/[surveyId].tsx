import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuBar } from "../../component/menuBar";
import styles from "../../styles/attemptSurvey.module.scss";

const SurveyAttempt = () => {
  const router = useRouter();
  const { surveyId } = router.query;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <div style={{ height: "100%" }}>
        <MenuBar />
        <div className={styles.container}>
          <div className={styles.previewTop}>
            <p>powered by</p>
            <h1>Survey Rocketo</h1>
          </div>
          <div className={styles.midContainer}>
            <h1>majaani life {surveyId}</h1>
          </div>
        </div>
      </div>
    )
  );
};

export default SurveyAttempt;
