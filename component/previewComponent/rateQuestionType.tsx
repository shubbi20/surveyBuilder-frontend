import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { useAtom } from "jotai";
import {
  SurveyResponseAtom,
  SurveyResponseInterface,
} from "../../state-machine/designer/attemptState";

interface props {
  question: string;
  description: string;
  index?: number;
  finish?: (val: number) => void;
}
const RateQuestion: React.FC<props> = ({
  question,
  description,
  index,
  finish,
}): any => {
  const [mounted, setMounted] = useState(false);
  const [surveyResponse, setSurveyResponse] = useAtom(SurveyResponseAtom);

  const [val, setVal] = useState(0);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentStart = (e: any) => {
    if (val === 0) {
      setVal(val + 1);
      if (finish) {
        finish(1);
      }
    }

    const questionAns = e;
    if (typeof index === "number") {
      const dat: SurveyResponseInterface[] = surveyResponse;
      if (dat && dat[index]) {
        dat[index].questionAns = questionAns;
        setSurveyResponse(dat);
      }
    }
  };

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>
        <Rate defaultValue={3} onChange={currentStart} />
      </div>
    )
  );
};

export default RateQuestion;
