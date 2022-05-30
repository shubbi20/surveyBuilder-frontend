import { Button } from "antd";
import { useRouter } from "next/router";
import { MenuBar } from "../../component/menuBar";

const Logout = () => {
  const router = useRouter();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MenuBar />
      <h1>Are you sure you want to logout</h1>
      <Button
        type="primary"
        onClick={() => {
          localStorage.clear();
          router.push("/home");
        }}
      >
        LogOut
      </Button>
    </div>
  );
};

export default Logout;
