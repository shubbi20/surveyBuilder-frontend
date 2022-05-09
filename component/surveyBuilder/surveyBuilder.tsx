import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import {
  selectionQuestionAtom,
  Selectiontypeinterface,
  addSelectionQuestionAtom,
  updateIndexPrevElementAtom,
  toggleCheckAtom,
  surveyNameAtom,
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

  const [surveyName, setSurveyName] = useAtom(surveyNameAtom);

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

  // function handleQuestion(questionType: string) {
  //   return () => {
  //     const obj: Selectiontypeinterface = {
  //       QuestionType: questionType,
  //       Question: "",
  //       desc: "",
  //     };
  //     addSelectionQuestion(obj);
  //     setIsModalVisible(false);
  //   };
  // }

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
  const handleRef = (el: any) => {
    // console.log("hey", el);
    if (!el) {
      return;
    }
    el.scrollIntoView();
  };

  return (
    mounted && (
      <div className={styles.surveybuilder}>
        <Input
          placeholder="Create Your Survey name"
          value={surveyName}
          onChange={(e: any) => {
            setSurveyName(e.target.value);
          }}
          maxLength={32}
          allowClear={true}
          showCount
        />
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

        <Button
          type="primary"
          onClick={showModal}
          style={{ margin: "15px 15px 60px 5px" }}
        >
          +New Question
        </Button>
        {selectionQuestion.length > 0 ? (
          <Button
            ref={handleRef}
            type="primary"
            style={{ margin: "15px 15px 60px 1px" }}
          >
            Save Survey
          </Button>
        ) : null}

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
            handlefunc={handleSelectionQuestion("audioQuestion")}
            Quesicon={(<AudioOutlined />) as any}
            Questype={"Audio"}
            Quesdesc={"speak into a microphone"}
          ></QuestionType>

          <QuestionType
            handlefunc={handleSelectionQuestion("textQuestion")}
            Quesicon={(<FormOutlined />) as any}
            Questype={"Open Text"}
            Quesdesc={"type in a textbox"}
          ></QuestionType>

          <QuestionType
            handlefunc={handleSelectionQuestion("ratingQuestion")}
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
