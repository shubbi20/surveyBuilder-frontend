import { Menu } from "antd";
import "antd/dist/antd.css";
import { LinkOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const MenuBar = () => {
  const router = useRouter();
  const [currentKey, setCurrentKey] = useState("");

  const handleClick = (e: any) => {
    setCurrentKey(e.key);
    router.push(e.key);
    console.log(currentKey);
  };
  console.log(currentKey);
  //   useEffect(()=>{
  //     setCurrentKey();
  //   }[currentKey])

  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={handleClick}
        defaultSelectedKeys={[currentKey]}
        selectedKeys={[currentKey]}
        style={{ backgroundColor: "#fcde67" }}
      >
        <Menu.Item style={{ color: "#030e12", fontWeight: "bold" }} key="home">
          Home
        </Menu.Item>
        <Menu.Item style={{ color: "#030e12", fontWeight: "bold" }} key="About">
          About
        </Menu.Item>
        <Menu.Item
          style={{ color: "#030e12", fontWeight: "bold" }}
          key="Login/Signup"
        >
          Login/Signup
        </Menu.Item>
        <Menu.Item
          key="link"
          icon={<LinkOutlined />}
          style={{ color: "#030e12", fontWeight: "bolder" }}
        >
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#030e12", fontWeight: "1800" }}
          >
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
    </div>

    // <Menu
    //   mode="horizontal"
    //   //   onClick={handleClick}
    //   //   selectable={true}
    //   //   defaultSelectedKeys={[currentKey]}
    //   //   selectedKeys={[currentKey]}
    // >
    //   <Menu.Item key="designer">Design</Menu.Item>
    //   <Menu.Item key="logic">Logic</Menu.Item>

    //   <Menu.Item key="jsoneditor">JSON editor</Menu.Item>

    //   <Menu.Item key="translation">Translation</Menu.Item>
    // </Menu>
  );
};

export default MenuBar;
