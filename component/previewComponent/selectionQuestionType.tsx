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

const SelectionQuestion: React.FC<props> = ({
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
      </div>
    )
  );
};

export default SelectionQuestion;
