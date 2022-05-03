import styles from "../../styles/preview.module.scss";
import {
  indexElementPreviewAtom,
  updateIndexPrevElementAtom,
  selectionQuestionAtom,
} from "../../state-machine/designer";
import { useAtom } from "jotai";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { CheckOutlined, AudioOutlined } from "@ant-design/icons";

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

        <Button
          type="primary"
          icon={<CheckOutlined />}
          size="large"
          onClick={toggleCheck}
          style={{
            width: 130,
            height: 50,
          }}
        >
          Finished
        </Button>
      </div>
    )
  );
};

export default AudioQuestion;
