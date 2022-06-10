import React, { useEffect, useState } from "react";
import { MenuBar } from "../component/menuBar";
import styles from "../styles/page.module.scss";
import { HomeContent } from "../component/homeContent";
import { notification } from "antd";
import "antd/dist/antd.css";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    openNotification();
    console.log("hello");
  }, []);

  const openNotification = () => {
    notification.open({
      placement: "bottomRight",
      message: "Notification Title",
      description: "Welcome to SurveyRocketo🚀",
    });
  };

  return (
    mounted && (
      <div className={styles.home}>
        <MenuBar />
        <div className={styles.middlehomecontainer}>
          <HomeContent />
        </div>
        <div className={styles.stickyFooter}>
          A project built with 💙 by{" "}
          <a href="https://www.linkedin.com/in/shubham-negi20/">
            <u>Shubham negi</u>
          </a>
        </div>
      </div>
    )
  );
};

export default Home;
