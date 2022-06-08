import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { deleteSurvey, getUserSurvey } from "../../api/survey";
import { MenuBar } from "../../component/menuBar";
import { tokenAtom } from "../../state-machine/designer";
import surveyPic from "../../images/survey.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

export const YourSurvey = () => {
  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useAtom(tokenAtom);
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);
  const route = useRouter();
  const fetchData = async () => {
    const [data, error] = await getUserSurvey(token);
    if (data) {
      return data;
    }
    return null;
  };

  const openNotification = () => {
    notification.open({
      placement: "bottomRight",
      message: "Notification Title",
      description: "Welcome 😀 ,Hope you enjoy your stay",
    });
  };

  const fetchDelete = async (surveyId: any) => {
    const [data, error] = await deleteSurvey(token, surveyId);
    console.log("hey its working");
    if (data) {
      const dat = await fetchData();
      if (dat) {
        setSurvey(dat);
      }
      window.alert("survey is deleted successfully");
      return;
    }
    window.alert("failed to delete the survey");
  };

  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetchData();
      if (data) {
        setSurvey(data);
      }
    };
    fetchingData();
    openNotification();
  }, []);

  return (
    mounted && (
      <div>
        <MenuBar />
        <div>
          {survey.length < 1 ? (
            <div>You have no survey</div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                {survey &&
                  survey.map((survey: any, index: any) => {
                    const { userName, surveyName, date, _id } = survey;
                    return (
                      <div className="survey-card" key={index}>
                        <div className="survey-card__img">
                          <Image
                            width={80}
                            height={90}
                            src={surveyPic.src}
                            alt="person"
                          />
                        </div>
                        <div className="survey-card__details">
                          <p>User Name : {userName}</p>
                          <p>Survey Name : {surveyName}</p>
                          <p>Date : {date}</p>
                          <div>
                            <Button
                              type="default"
                              style={{
                                backgroundColor: "paleturquoise",
                                height: "30px",
                                width: "120px",
                                cursor: "pointer",
                              }}
                              onClick={() => route.push(`/yourSurvey/${_id}`)}
                            >
                              See response
                            </Button>
                            <Button
                              type="default"
                              style={{
                                backgroundColor: "#ffcccb",
                                height: "30px",
                                width: "120px",
                                cursor: "pointer",
                                marginLeft: "12px",
                              }}
                              onClick={() => fetchDelete(_id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        ;
      </div>
    )
  );
};

export default YourSurvey;
