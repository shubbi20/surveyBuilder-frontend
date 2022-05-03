import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { CheckOutlined, AudioOutlined } from "@ant-design/icons";
import { Rate } from "antd";

interface props {
  question: string;
  description: string;
  toggleCheck: () => void;
}
const RateQuestion: React.FC<props> = ({
  question,
  description,
  toggleCheck,
}): any => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentStart = (e: any) => {
    console.log(e);
  };

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>
        <Rate defaultValue={3} onChange={currentStart} />
        <span className="ant-rate-text"></span>
        <br />
        <Button
          type="primary"
          icon={<CheckOutlined />}
          size="large"
          onClick={toggleCheck}
        >
          Finished
        </Button>
      </div>
    )
  );
};

export default RateQuestion;
