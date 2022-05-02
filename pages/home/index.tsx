import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import { MenuBar } from "../../component/menuBar";
import gameOn from "../../images/gameOn.png";
import styles from "../../styles/page.module.scss";
import { HomeContent } from "../../component/homeContent";

const Home = () => {
  return (
    <div className={styles.home}>
      <MenuBar />
      <div className={styles.middlehomecontainer}>
        <HomeContent />
      </div>
      <div className={styles.stickyFooter}>
        A project built with <HeartOutlined /> by{" "}
        <a href="https://www.linkedin.com/in/shubham-negi20/">
          <u>Shubham negi</u>
        </a>
      </div>
    </div>
  );
};

export default Home;
