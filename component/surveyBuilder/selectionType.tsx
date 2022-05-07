import "antd/dist/antd.css";
import { Button, Input } from "antd";
import styles from "../../styles/designer.module.scss";
import {
  updateSelectionDescTextAtom,
  updateSelectionQuestionTextAtom,
  selectionEleAtSpecificIndexAtom,
  deleteChoicesAtom,
  updateChoicesAtom,
} from "../../state-machine/designer";
import { useAtom } from "jotai";

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
  const [Question, addchoicesQuestion] = useAtom(
    selectionEleAtSpecificIndexAtom(trackQuestionIndex)
  );
  const [, deleteChoices] = useAtom(deleteChoicesAtom);
  const [, updateChoices] = useAtom(updateChoicesAtom);

  const [, updateSelectionQuestionText] = useAtom(
    updateSelectionQuestionTextAtom
  );

  const [, updateSelectionDescText] = useAtom(updateSelectionDescTextAtom);

  const changeQuestionText = (event: any) => {
    const queText: string = event.target.value;
    updateSelectionQuestionText({ trackQuestionIndex, queText });
  };

  const changeDescriptionText = (event: any) => {
    const descText: string = event.target.value;
    updateSelectionDescText({ trackQuestionIndex, descText });
  };

  const updateIndexElement = (event: any) => {};

  const val = <Button value="addchoices"></Button>;

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

      {Question.QuestionType === "selectionQuestion" ? (
        <div>
          {Question.choices.map((ele, index) => {
            return (
              <div style={{ display: "flex" }}>
                <span>-</span>
                <Input
                  placeholder="choices"
                  value={Question.choices[index]}
                  onChange={(e: any) => {
                    console.log("shubbi", e.target.value);
                    const choicesText = e.target.value;
                    updateChoices({ index, trackQuestionIndex, choicesText });
                  }}
                />
              </div>
            );
          })}
          <button
            style={{ margin: "10px" }}
            onClick={() => {
              addchoicesQuestion(trackQuestionIndex);
            }}
          >
            +add
          </button>
          <button
            onClick={() => {
              deleteChoices(trackQuestionIndex);
            }}
          >
            delete
          </button>
        </div>
      ) : null}
    </div>
  );
};
