import styles from "../styles/page.module.scss";
import { useRouter } from "next/router";
import gameOn from "../images/gameOn.png";

export const TitleBar = () => {
  const router = useRouter();

  function handleClick(name: string) {
    return () => {
      console.log(name);
      router.push(name);
    };
  }

  return (
    <div className={styles.container1}>
      {/* <div style={{ marginLeft: "1em" }}> hello</div> */}
      <img
        style={{ marginLeft: "0.5em", height: "4em" }}
        src={gameOn.src}
        alt="logo"
      />

      <div className={styles.container2}>
        <div className={styles.Menuelement} onClick={handleClick("home")}>
          home
        </div>
        <div
          className={styles.Menuelement}
          key="signup"
          onClick={handleClick("signup")}
        >
          signup
        </div>
        <div
          className={styles.Menuelement}
          key="createSurvey"
          onClick={handleClick("createSurvey")}
        >
          createSurvey
        </div>
        <div
          className={styles.Menuelement}
          key="attemptSurvey"
          onClick={handleClick("attempSurvey")}
        >
          attemptSurvey
        </div>
      </div>
    </div>
  );
};
