import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Radio, Space } from "antd";
import { useAtom } from "jotai";
import {
  SurveyResponseAtom,
  SurveyResponseInterface,
} from "../../state-machine/designer/attemptState";

interface props {
  question: string;
  description: string;
  choices: string[];
  index?: number;
  finish?: (val: number) => void;
}

const SelectionQuestion: React.FC<props> = ({
  question,
  description,
  choices,
  index,
  finish,
}): any => {
  const [val, setVal] = useState(0);
  const [surveyResponse, setSurveyResponse] = useAtom(SurveyResponseAtom);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const onRadioChange = (e: any) => {
    if (val === 0) {
      setVal(val + 1);
      if (typeof finish !== "undefined") {
        finish(1);
      }
    }

    const queAns = e.target.value;
    if (typeof index === "number") {
      const dat: SurveyResponseInterface[] = surveyResponse;
      if (dat && dat[index]) {
        dat[index].questionAns = queAns.toString();
        setSurveyResponse(dat);
      }
    }
  };

  return (
    mounted && (
      <div className={styles.typeContainer}>
        <div className={styles.previewQuestion}>{question}</div>
        <div className={styles.previewDescription}>{description}</div>

        <Radio.Group size="small" onChange={onRadioChange}>
          <Space direction="vertical">
            {choices.map((ele) => {
              return <Radio value={ele}>{ele}</Radio>;
            })}
          </Space>
        </Radio.Group>
      </div>
    )
  );
};

export default SelectionQuestion;
