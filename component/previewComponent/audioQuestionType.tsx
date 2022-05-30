import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";

interface props {
  question: string;
  description: string;
  toggleCheck: () => void;
}
const AudioQuestion: React.FC<props> = ({
  question,
  description,
  toggleCheck,
}): any => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentStart = (e: any) => {
    console.log(e); //save the value here
  };

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>
        <Button
          type="primary"
          icon={<AudioOutlined />}
          size="large"
          onClick={toggleCheck}
          style={{
            marginBottom: "3.5em",
            marginTop: "1em",
            backgroundColor: "rgb(168, 58, 58)",
            width: 130,
            height: 50,
            borderRadius: "9px",
          }}
        >
          Record
        </Button>
      </div>
    )
  );
};

export default AudioQuestion;
