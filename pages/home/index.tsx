//import { Layout } from "antd";
// const { Header, Footer, Sider, Content } = Layout;
import { HeartOutlined } from "@ant-design/icons";
import React from "react";
import MenuBar from "../../component/menuBar";

import styles from "../../styles/page.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      <div
        style={{
          height: "7.5%",
          flexGrow: 1,
          backgroundColor: "palegoldenrod",
        }}
      >
        <MenuBar />
      </div>
      <div style={{ height: "85%", flexGrow: 1, backgroundColor: "#5bccf6" }}>
        div
      </div>
      <div
        style={{
          height: "7.5%",
          flexGrow: 1,
          backgroundColor: "#fcde67",
          color: "#5bccf6",
          fontWeight: "bolder",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        A project built with <HeartOutlined /> by shubham negi and nitin
      </div>
    </div>

    // <>
    //   <Layout>
    //     <Header
    //       style={{
    //         height: 80,
    //         textAlign: "center",
    //         backgroundColor: "yellow",
    //       }}
    //     >
    //       this is home
    //     </Header>
    //     <Content
    //       style={{
    //         height: 300,
    //         textAlign: "center",
    //         backgroundColor: "palegreen",
    //       }}
    //     >
    //       Content
    //     </Content>
    //     <Footer
    //       style={{
    //         height: 60,
    //         textAlign: "center",
    //         backgroundColor: "palevioletred",
    //       }}
    //     >
    //       Footer
    //     </Footer>
    //   </Layout>
    // </>
  );
};

export default Home;
