import styles from "../styles/page.module.scss";
import { useRouter } from "next/router";
import gameOn from "../images/gameOn.png";

export const MenuBar = () => {
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
        style={{ boxSizing: "border-box", marginLeft: "0.2em", height: "4em" }}
        src={gameOn.src}
        alt="logo"
      />

      <div className={styles.container2}>
        <div
          className={router.pathname == "/home" ? styles.active : ""}
          style={{ marginRight: "1.1em" }}
          onClick={handleClick("home")}
        >
          home
        </div>
        <div
          className={router.pathname == "/signup" ? styles.active : ""}
          style={{ marginRight: "1.1em" }}
          onClick={handleClick("signup")}
        >
          signup
        </div>
        <div
          className={router.pathname == "/createSurvey" ? styles.active : ""}
          style={{ marginRight: "1.1em" }}
          onClick={handleClick("createSurvey")}
        >
          createSurvey
        </div>
        <div
          className={router.pathname == "/attempSurvey" ? styles.active : ""}
          style={{ marginRight: "1.7em" }}
          onClick={handleClick("attempSurvey")}
        >
          attemptSurvey
        </div>
      </div>
    </div>
  );
};
