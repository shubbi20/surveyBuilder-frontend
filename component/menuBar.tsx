import styles from "../styles/page.module.scss";
import { useRouter } from "next/router";
import gameOn from "../images/gameOn.png";
import { tokenAtom } from "../state-machine/designer/index";
import { useAtom } from "jotai";
import Link from "next/link";
import Image from "next/image";

const url: string = gameOn.src;

export const MenuBar = () => {
  const router = useRouter();
  const [token, setToken] = useAtom(tokenAtom);

  return (
    <div className={styles.container1}>
      <Image
        style={{
          boxSizing: "border-box",
          marginLeft: "0.2em",
          height: "3.2em",
        }}
        width={60}
        height={60}
        src={url}
        alt="logo"
      />

      <div className={styles.container2}>
        <Link href="/">
          <div
            className={router.pathname == "/" ? styles.active : ""}
            style={{ marginRight: "1.1em" }}
          >
            Home
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
                CreateSurvey
              </div>
            </Link>
            <Link href="/attemptSurvey">
              <div
                className={
                  router.pathname == "/attemptSurvey" ? styles.active : ""
                }
                style={{ marginRight: "1.7em" }}
              >
                AttemptSurvey
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
                className={router.pathname == "/login" ? styles.active : ""}
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
