import styles from "../../styles/preview.module.scss";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { SurveyResponseAtom } from "../../state-machine/designer/attemptState";
import { SurveyResponseInterface } from "../../state-machine/designer/attemptState";

const { TextArea } = Input;

interface props {
  question: string;
  description: string;
  index?: number;
  finish?: (val: number) => void;
}

const TextQuestionType: React.FC<props> = ({
  question,
  description,
  index,
  finish,
}): false | any => {
  const [valText, setValText] = useState("");
  const [surveyResponse, setSurveyResponse] = useAtom(SurveyResponseAtom);
  const [val, setVal] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const onChange = (e: any) => {
    setValText(e.target.value);
  };

  useEffect(() => {
    const questionAns = valText;
    const data = surveyResponse;
    if (val === 0 && questionAns.trim().length > 0) {
      setVal(val + 1);
      if (finish) {
        finish(1);
      }
    }
    if (questionAns.trim().length === 0 && val != 0) {
      if (finish && val !== 0) {
        finish(-1);
      }
      setVal(0);
    }

    if (typeof index === "number") {
      const dat: SurveyResponseInterface[] = surveyResponse;
      if (dat && dat[index]) {
        dat[index].questionAns = questionAns;
        setSurveyResponse(dat);
      }
    }
  }, [valText]);

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>

        <div>
          <TextArea
            showCount
            maxLength={257}
            minLength={20}
            style={{ height: "16em", width: "33em" }}
            onChange={onChange}
            value={valText}
          />
        </div>
      </div>
    )
  );
};

export default TextQuestionType;
