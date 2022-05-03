import "antd/dist/antd.css";
import { Input } from "antd";
import styles from "../../styles/designer.module.scss";
import {
  selectionQuestionAtom,
  Selectiontypeinterface,
  updateIndexPrevElementAtom,
  updateSelectionDescTextAtom,
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

  const [, updateSelectionDescText] = useAtom(updateSelectionDescTextAtom);

  // const [indexElementPreview, setIndexElementPreview] = useAtom(
  //   updateIndexPrevElement
  // );

  const changeQuestionText = (event: any) => {
    const queText: string = event.target.value;
    updateSelectionQuestionText({ trackQuestionIndex, queText });
  };

  const changeDescriptionText = (event: any) => {
    const descText: string = event.target.value;
    updateSelectionDescText({ trackQuestionIndex, descText });
  };

  const updateIndexElement = (event: any) => {};

  console.log(Question);
  return (
    <div className={styles.selectionType} onClick={updateIndexElement}>
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
        onChange={changeDescriptionText}
      />
      {Question.hasOwnProperty("choices") ? (
        <div style={{ display: "flex" }}>
          <span>-</span>
          <TextArea
            placeholder="choices..."
            bordered={false}
            size="large"
            autoSize
          />
        </div>
      ) : null}
    </div>
  );
};
