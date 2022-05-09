import React, { useState, useEffect } from "react";
import { MenuBar } from "../../component/menuBar";

import Loader from "../Loader";

import { tokenAtom } from "../../state-machine/designer/index";
import { useAtom } from "jotai";

import getAllSurveys from "../util/api/getAllSurveys";
import surveyPic from "../../images/survey.png";

// import "./allsurveys.css";

export default function AllSurveys() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const [token, setToken] = useAtom(tokenAtom);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetching = async () => {
      setLoading(true);
      const [data, error] = await getAllSurveys(token);
      setData(data);
      console.log(data);
      setError(error);
      setLoading(false);
    };

    fetching();
  }, [token]);

  return (
    mounted && (
      <div>
        <MenuBar />
        <div className="surveys-container">
          <h2>All Surveys</h2>
          {loading && <Loader />}
          {error && <p className="error-msg">Failed to fetch Surveys</p>}
          {data &&
            data.length != 0 &&
            data.map((survey: any, index: any) => {
              const { userId, surveyName, date } = survey;
              return (
                <div className="survey-card" key={index}>
                  <div className="survey-card__img">
                    <img src={surveyPic.src} alt="person" />
                  </div>
                  <div className="survey-card__details">
                    <p>User Name : {userId}</p>
                    <p>Survey Name : {surveyName}</p>
                    <p>Date : {date}</p>
                    <button className="btn">Attempt</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    )
  );
}
