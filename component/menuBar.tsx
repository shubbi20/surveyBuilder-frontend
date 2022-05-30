import styles from "../styles/page.module.scss";
import { useRouter } from "next/router";
import gameOn from "../images/gameOn.png";
import { tokenAtom } from "../state-machine/designer/index";
import { useAtom } from "jotai";
import Link from "next/link";

const url: string = gameOn.src;

export const MenuBar = () => {
  const router = useRouter();
  const [token, setToken] = useAtom(tokenAtom);

  return (
    <div className={styles.container1}>
      <img
        style={{
          boxSizing: "border-box",
          marginLeft: "0.2em",
          height: "3.2em",
        }}
        src={url}
        alt="logo"
      />

      <div className={styles.container2}>
        <Link href="/home">
          <div
            className={router.pathname == "/home" ? styles.active : ""}
            style={{ marginRight: "1.1em" }}
          >
            home
          </div>
        </Link>

        {token != "" && (
          <>
            <Link href="/createSurvey">
              <div
                className={
                  router.pathname == "/createSurvey" ? styles.active : ""
                }
                style={{ marginRight: "1.1em" }}
              >
                createSurvey
              </div>
            </Link>
            <Link href="/attemptSurvey">
              <div
                className={
                  router.pathname == "/attemptSurvey" ? styles.active : ""
                }
                style={{ marginRight: "1.7em" }}
              >
                attemptSurvey
              </div>
            </Link>
            <Link href="/logout">
              <div
                className={router.pathname == "/logout" ? styles.active : ""}
                style={{ marginRight: "1.7em" }}
              >
                LogOut
              </div>
            </Link>
          </>
        )}
        {token === "" && (
          <>
            <Link href="/signup">
              <div
                className={router.pathname == "/signup" ? styles.active : ""}
                style={{ marginRight: "1.1em" }}
              >
                SignUp
              </div>
            </Link>
            <Link href="/login">
              <div
                className={router.pathname == "/logout" ? styles.active : ""}
                style={{ marginRight: "1.7em" }}
              >
                Login
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
