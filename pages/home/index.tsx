import { Layout } from "antd";
//import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

import styles from "../../styles/page.module.scss";
const Home = () => {
  return (
    <Layout className={styles.home}>
      <Header
        style={{ height: "16%", flexGrow: 1, backgroundColor: "palegoldenrod" }}
      >
        this is home
      </Header>
      <Content
        style={{ height: "76%", flexGrow: 1, backgroundColor: "palegreen" }}
      >
        Content
      </Content>
      <Footer
        style={{ height: "8%", flexGrow: 1, backgroundColor: "paleturquoise" }}
      >
        Footer
      </Footer>
    </Layout>

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
