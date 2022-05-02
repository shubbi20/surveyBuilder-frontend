import "antd/dist/antd.css";
import { Input } from "antd";
import styles from "../../styles/designer.module.scss";
import {
  selectionQuestionAtom,
  Selectiontypeinterface,
  updateSelectionQuestionTextAtom,
  selectionEleAtSpecificIndexAtom,
} from "../../state-machine/designer";
import { useAtom } from "jotai";
import { focusAtom } from "jotai/optics";

interface Props extends React.PropsWithChildren<any> {
  trackQuestionIndex: number;
}

export const SelectionQuestionType: React.FC<Props> = ({
  trackQuestionIndex,
}) => {
  const { TextArea } = Input;

  /**
   * custom derived Atom
   */
  const [Question] = useAtom(
    selectionEleAtSpecificIndexAtom(trackQuestionIndex)
  );

  const [, updateSelectionQuestionText] = useAtom(
    updateSelectionQuestionTextAtom
  );

  const changeQuestionText = (event: any) => {
    const queText: string = event.target.value;
    updateSelectionQuestionText({ trackQuestionIndex, queText });
  };

  console.log(Question);
  return (
    <div className={styles.selectionType}>
      <TextArea
        placeholder="Question Text..."
        bordered={false}
        value={Question.Question}
        onChange={changeQuestionText}
        size="large"
        autoSize
      ></TextArea>
      <TextArea
        placeholder="Description..."
        bordered={false}
        size="large"
        value={Question.desc}
        autoSize
      />
      <div style={{ display: "flex" }}>
        <span>-</span>
        <TextArea
          placeholder="choices..."
          bordered={false}
          size="large"
          autoSize
        />
      </div>
    </div>
  );
};
