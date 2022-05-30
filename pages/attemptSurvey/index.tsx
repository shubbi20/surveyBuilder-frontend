import React, { useState, useEffect } from "react";
import { MenuBar } from "../../component/menuBar";
import Loader from "../Loader";
import { tokenAtom } from "../../state-machine/designer/index";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import getAllSurveys from "../../api/getAllSurveys";
import surveyPic from "../../images/survey.png";
import Image from "next/image";
export default function AllSurveys() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const route = useRouter();
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {loading && <Loader />}
            {error && <p className="error-msg">Failed to fetch Surveys</p>}
            {data &&
              data.length != 0 &&
              data.map((survey: any, index: any) => {
                const { userName, surveyName, date, _id } = survey;
                return (
                  <div className="survey-card" key={index}>
                    <div className="survey-card__img">
                      <Image
                        width={100}
                        height={120}
                        src={surveyPic.src}
                        alt="person"
                      />
                    </div>
                    <div className="survey-card__details">
                      <p>User Name : {userName}</p>
                      <p>Survey Name : {surveyName}</p>
                      <p>Date : {date}</p>
                      <button
                        className="btn"
                        onClick={() => route.push(`/attemptSurvey/${_id}`)}
                      >
                        Attempt
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
}
