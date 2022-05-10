import styles from "../../styles/preview.module.scss";
import { useEffect, useState } from "react";
import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { Radio, Input, Space } from "antd";
import {tokenAtom} from '../../state-machine/designer/index';


interface props {
  question: string;
  description: string;
  choices: string[];
  toggleCheck: () => void;
}

const SelectionQuestion: React.FC<props> = ({
  question,
  description,
  toggleCheck,
  choices,
}): any => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const onRadioChange = (e: any) => {
    console.log("radio checked", e.target.value);
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

export default SelectionQuestion;
