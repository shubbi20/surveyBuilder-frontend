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
import { CheckOutlined } from "@ant-design/icons";

const { TextArea } = Input;

interface props {
  question: string;
  description: string;
  toggleCheck: () => void;
}

const TextQuestionType: React.FC<props> = ({
  question,
  description,
  toggleCheck,
}): false | any => {
  const [selectionQuestion] = useAtom(selectionQuestionAtom);
  const [indexOfElement] = useAtom(indexElementPreviewAtom);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const onChange = (e: any) => {
    console.log("Change:", e.target.value);
  };

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>

        <div>
          <TextArea
            showCount
            maxLength={120}
            style={{ height: 230, width: 460 }}
            onChange={onChange}
          />
        </div>

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

export default TextQuestionType;
