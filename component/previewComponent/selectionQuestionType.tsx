import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Radio, Space } from "antd";
import { useAtom } from "jotai";
import { SurveyResponseAtom } from "../../state-machine/designer/attemptState";

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
        console.log("he how are you");
        finish(1);
      }
    }

    const questionAns = e.target.value;
    if (index) {
      const dat = surveyResponse;
      dat[index].questionAns = questionAns;
      setSurveyResponse(dat);
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
