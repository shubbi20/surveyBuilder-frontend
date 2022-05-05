import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import {
  selectionQuestionAtom,
  Selectiontypeinterface,
  addSelectionQuestionAtom,
  updateIndexPrevElementAtom,
  toggleCheckAtom,
} from "../../state-machine/designer";
import { useAtom } from "jotai";
import styles from "../../styles/designer.module.scss";
import {
  AudioOutlined,
  FormOutlined,
  UnorderedListOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { QuestionType } from "./questionType";
import { SelectionQuestionType } from "./selectionType";

interface Props extends React.PropsWithChildren<any> {}

export const SurveyBuilder: any = () => {
  const [, addSelectionQuestion] = useAtom(addSelectionQuestionAtom);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  // return mounted && <div>Run on client only</div>

  const [check, setCheck] = useAtom(toggleCheckAtom);
  const [selectionQuestion] = useAtom(selectionQuestionAtom);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [indexElementPreview, setIndexElementPreview] = useAtom(
    updateIndexPrevElementAtom
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (index: any) => {
    setIsModalVisible(false);
  };

  function handleQuestion(questionType: string) {
    return () => {
      const obj: Selectiontypeinterface = {
        QuestionType: questionType,
        Question: "",
        desc: "",
      };
      addSelectionQuestion(obj);
      setIsModalVisible(false);
    };
  }

  function handleSelectionQuestion(questionType: string) {
    return () => {
      const obj: Selectiontypeinterface = {
        QuestionType: questionType,
        Question: "",
        desc: "",
        choices: [""],
      };
      addSelectionQuestion(obj);
      setIsModalVisible(false);
    };
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateIndexEle = (index: number) => {
    return () => {
      setIndexElementPreview(index);
      setCheck(false);
    };
  };

  return (
    mounted && (
      <div className={styles.surveybuilder} suppressHydrationWarning={true}>
        <h1>survey Builder</h1>
        {selectionQuestion.length > 0
          ? selectionQuestion.map((elem: any, index: number) => {
              return (
                <div
                  key={index}
                  style={{ margin: "3px 1px" }}
                  onClick={updateIndexEle(index)}
                >
                  <SelectionQuestionType trackQuestionIndex={index} />
                </div>
              );
            })
          : null}

        <Button type="primary" onClick={showModal}>
          +New Question
        </Button>

        <Modal
          title="Add Item to Survey"
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={handleCancel}
        >
          <QuestionType
            handlefunc={handleSelectionQuestion("selectionQuestion")}
            Quesicon={(<UnorderedListOutlined />) as any}
            Questype={"Selection"}
            Quesdesc={"choose from a set of options"}
          ></QuestionType>

          <QuestionType
            handlefunc={handleQuestion("audioQuestion")}
            Quesicon={(<AudioOutlined />) as any}
            Questype={"Audio"}
            Quesdesc={"speak into a microphone"}
          ></QuestionType>

          <QuestionType
            handlefunc={handleQuestion("textQuestion")}
            Quesicon={(<FormOutlined />) as any}
            Questype={"Open Text"}
            Quesdesc={"type in a textbox"}
          ></QuestionType>

          <QuestionType
            handlefunc={handleQuestion("ratingQuestion")}
            Quesicon={(<StarOutlined />) as any}
            Questype={"Rating"}
            Quesdesc={"give your rating"}
          ></QuestionType>

          <p>Some contents...</p>
        </Modal>
      </div>
    )
  );
};