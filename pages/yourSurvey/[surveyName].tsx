import { MenuBar } from "../../component/menuBar";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { tokenAtom } from "../../state-machine/designer";
import { getSurveyResponse, getSurveyRes } from "../../api/survey";
import { useEffect, useState } from "react";
import { SurveyResponseInterface } from "../../state-machine/designer/attemptState";
import surveyPic from "../../images/survey.png";
import Image from "next/image";
import "antd/dist/antd.css";
import { Avatar, Button, Col, Divider, Drawer, List, Row } from "antd";

interface ResponseInterface {
  _id: any;
  surveyId: string;
  surveyName: string;
  surveyCreator: string;
  userAttempted: string;
  date: string;
  surveyQuestion: SurveyResponseInterface[];
}

export const SurveyResponse = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const [response, setResponse] = useState<ResponseInterface[]>([]);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    const callApi = async () => {
      const { surveyName } = router.query;
      const [data, error] = await getSurveyRes(token, surveyName as string);
      if (data) {
        setResponse(data);
      }
    };
    callApi();
  }, [router.isReady]);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    mounted && (
      <div>
        <MenuBar />
        <div>
          {response.length > 0 ? (
            response.map((survey: ResponseInterface, index: any) => {
              return (
                <>
                  <div className="survey-card" key={survey._id}>
                    <div className="survey-card__img">
                      <Image
                        width={80}
                        height={90}
                        src={surveyPic.src}
                        alt="person"
                      />
                    </div>
                    <div className="survey-card__details">
                      <p>Survey Name : {survey.surveyName as string}</p>
                      <p>Created by : {survey.surveyCreator}</p>
                      <p>attempted by : {survey.userAttempted}</p>
                      <p>Date : {survey.date}</p>
                      <Button type="primary" onClick={showDrawer}>
                        See Response
                      </Button>
                    </div>
                  </div>
                  <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                  >
                    <p
                      style={{
                        marginBottom: 4,
                        fontSize: "28px",
                        fontFamily: "monospace",
                        fontWeight: "bold",
                      }}
                    >
                      {survey.surveyName}
                    </p>

                    <p style={{ marginBottom: 24 }}>
                      attempted by: {survey.userAttempted}
                    </p>
                    {survey.surveyQuestion &&
                      survey.surveyQuestion.map((ele, index) => {
                        return (
                          <>
                            <h3>
                              {`Que.${index + 1}`} {ele.Question}
                            </h3>
                            <h3>Ans: {ele.questionAns}</h3>
                            <Divider />
                          </>
                        );
                      })}
                  </Drawer>
                </>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <h2>No one has attempted the survey yet: No Response to show</h2>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default SurveyResponse;
