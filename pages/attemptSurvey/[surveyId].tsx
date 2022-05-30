import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuBar } from "../../component/menuBar";
import { tokenAtom, userAtom } from "../../state-machine/designer";
import styles from "../../styles/attemptSurvey.module.scss";
import getSurvey, { postSurveyResponse } from "../util/api/survey";
import TextQuestionType from "../../component/previewComponent/textQuestionType";
import RateQuestion from "../../component/previewComponent/rateQuestionType";
import SelectionQuestion from "../../component/previewComponent/selectionQuestionType";
import "antd/dist/antd.css";
import { Button, Divider, message } from "antd";
import {
  SurveyResponseAtom,
  SurveyResponseInterface,
} from "../../state-machine/designer/attemptState";

export interface Selectiontypeinterface {
  QuestionType: string;
  Question: string;
  desc: string;
  choices: string[];
}

interface survey {
  _id: string;
  userName: string;
  surveyName: string;
  surveyQuestion: Selectiontypeinterface[];
  data: string;
}

const SurveyAttempt = () => {
  const router = useRouter();
  const [response, SetReponse] = useAtom(SurveyResponseAtom);

  const [token] = useAtom(tokenAtom);
  const [surveyData, setSurveyData] = useState<survey>();
  const [mounted, setMounted] = useState(false);
  const [finishlength, setFinishLength] = useState(0);
  const [userAttempted, setUserAttempted] = useAtom(userAtom);
  // const [surveyResponse, setSurveyResponse] = useAtom(SurveyResponseAtom);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchData = async (surveyId: string) => {
    const [data, error] = await getSurvey(token, surveyId as string);
    if (error) {
      console.log("error:", error);
      window.alert(error);
      return null;
    }
    return data;
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const callApi = async () => {
      const { surveyId } = router.query;
      const data = await fetchData(surveyId as string);
      if (data) {
        setSurveyData(data);
        if (response.length === 0) {
          const dataarr: SurveyResponseInterface[] = [];
          data.surveyQuestion.forEach((ele: any) => {
            dataarr.push({
              QuestionType: ele.QuestionType,
              Question: ele.Question,
              questionAns: "",
            });
          });
          SetReponse(dataarr);
        }
      }
    };
    callApi();
  }, [router.isReady]);

  const addFinishLength = (val: number) => {
    console.log(finishlength, "length");
    setFinishLength(finishlength + val);
    console.log("chl gya");
  };

  const handleFinish = async () => {
    console.log(finishlength, "length");
    if (finishlength === response.length) {
      const surveyName = (surveyData as survey).surveyName;
      const surveyCreator = (surveyData as survey).userName;
      const surveyId = (surveyData as survey)._id;
      const surveyResponse: SurveyResponseInterface[] = response;
      console.log("see", surveyResponse);
      const [data, error] = await postSurveyResponse({
        token,
        surveyId,
        surveyName,
        surveyCreator,
        userAttempted,
        surveyResponse,
      });

      if (data) {
        console.log("Successful");
        router.push("/attemptSurvey");
        message.success("user attempted the survey successfully");
        localStorage.removeItem("SurveyResponse");
      }
    } else {
      message.warning("fill all the details correctly");
    }
  };

  return (
    mounted && (
      <div style={{ minHeight: "100vh", backgroundColor: "#206a85" }}>
        <MenuBar />
        <div className={styles.container}>
          <div className={styles.previewTop}>
            <p>powered by</p>
            <h1 style={{ fontSize: "25px" }}>Survey Rocketo</h1>
          </div>
          <div className={styles.midContainer}>
            <h1> Survey: {surveyData && (surveyData as survey).surveyName}</h1>

            <div style={{ height: "100%", width: "70%" }}>
              {surveyData &&
                (surveyData as survey).surveyQuestion.map(
                  (surveyQue, index) => {
                    if (surveyQue.QuestionType === "selectionQuestion") {
                      return (
                        <div key={index}>
                          <SelectionQuestion
                            question={surveyQue.Question}
                            description={surveyQue.desc}
                            choices={surveyQue.choices}
                            index={index}
                            finish={addFinishLength}
                          />
                          <Divider
                            style={{
                              backgroundColor: "lightgoldenrodyellow",
                              height: "1px",
                            }}
                          />
                        </div>
                      );
                    } else if (surveyQue.QuestionType === "textQuestion") {
                      return (
                        <div key={index}>
                          <TextQuestionType
                            question={surveyQue.Question}
                            description={surveyQue.desc}
                            index={index}
                            finish={addFinishLength}
                          />
                          <Divider
                            style={{
                              backgroundColor: "lightgoldenrodyellow",
                              height: "1px",
                            }}
                          />
                        </div>
                      );
                    } else if (surveyQue.QuestionType === "ratingQuestion") {
                      return (
                        <div key={index}>
                          <RateQuestion
                            question={surveyQue.Question}
                            description={surveyQue.desc}
                            index={index}
                            finish={addFinishLength}
                          />
                          <Divider
                            style={{
                              backgroundColor: "lightgoldenrodyellow",
                              height: "1px",
                            }}
                          />
                        </div>
                      );
                    }
                    return null;
                  }
                )}
            </div>

            <Button
              type="primary"
              size="large"
              style={{ marginBottom: "20px", width: "120px" }}
              onClick={handleFinish}
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default SurveyAttempt;
