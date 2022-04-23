import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import MenuBar from "../../component/menuBar";
import { TitleBar } from "../../component/titleBar";
import gameOn from "../../images/gameOn.png";
import styles from "../../styles/page.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <TitleBar />
      <div style={{ height: "80%", flexGrow: 1, backgroundColor: "#5bccf6" }}>
        div
        <div>hello</div>
      </div>
      <div
        style={{
          minHeight: "7%",
          flexGrow: 1,
          backgroundColor: "#fcde67",
          color: "#206a85",
          fontWeight: "bolder",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        A project built with <HeartOutlined /> by shubham negi and nitin
      </div>
    </div>
  );
};

export default Home;
