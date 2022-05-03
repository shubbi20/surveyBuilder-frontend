import styles from "../../styles/preview.module.scss";
import {
  indexElementPreviewAtom,
  updateIndexPrevElementAtom,
  selectionQuestionAtom,
  toggleCheckAtom,
} from "../../state-machine/designer";
import { useAtom } from "jotai";
import TextQuestionType from "./textQuestionType";
import Finish from "./finish";
import gameOn from "../../images/gameOn.png";
import { Descriptions } from "antd";
import { useEffect, useState } from "react";
import AudioQuestion from "./audioQuestionType";
/**
 * QuestionType
 * selectionQuestion
 * audioQuestion
 * textQuestion
 * ratingQuestion
 */

const Preview: React.FC<any> = (): false | any => {
  const [selectionQuestion] = useAtom(selectionQuestionAtom);
  const [indexOfElement] = useAtom(indexElementPreviewAtom);
  const [check, setCheck] = useAtom(toggleCheckAtom);

  const toggleCheck = () => {
    console.log("hey shubbi");
    setCheck(!check);
    console.log(check);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  console.log("negi", check);
  return (
    mounted && (
      <div className={styles.previewContainer}>
        <div className={styles.previewTop}>
          <p>powered by</p>
          <h1>Survey Rocketo</h1>
        </div>

        {/**
         * if there is nothing
         */}
        {typeof indexOfElement === "undefined" ? (
          <div className={styles.undefinedTypeImg}></div>
        ) : null}

        {/**
         * for textType
         */}
        {typeof indexOfElement === "number" &&
        selectionQuestion[indexOfElement].QuestionType === "textQuestion" &&
        !check ? (
          <TextQuestionType
            question={selectionQuestion[indexOfElement].Question}
            description={selectionQuestion[indexOfElement].desc}
            toggleCheck={toggleCheck}
          />
        ) : null}

        {/**
         * for AudioType
         */}
        {typeof indexOfElement === "number" &&
        selectionQuestion[indexOfElement].QuestionType === "audioQuestion" &&
        !check ? (
          <AudioQuestion
            question={selectionQuestion[indexOfElement].Question}
            description={selectionQuestion[indexOfElement].desc}
            toggleCheck={toggleCheck}
          />
        ) : null}

        {check ? <Finish /> : null}
      </div>
    )
  );
};

export default Preview;
