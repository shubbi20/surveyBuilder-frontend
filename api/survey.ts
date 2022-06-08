import apiUrl from "./apiUrl";
import { SurveyResponseInterface } from "../state-machine/designer/attemptState";

const getSurvey = async (token: any, surveyId: string) => {
  try {
    const url = apiUrl + "/getSurvey/" + surveyId;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      console.log("champak");
      throw data;
    }

    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export const postSurveyResponse = async ({
  token,
  surveyId,
  surveyName,
  surveyCreator,
  userAttempted,
  surveyResponse,
}: {
  token: string;
  surveyId: string;
  surveyName: string;
  surveyCreator: string;
  userAttempted: string;
  surveyResponse: SurveyResponseInterface[];
}) => {
  try {
    const url = apiUrl + "/attemptSurvey";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        surveyId: surveyId,
        surveyName: surveyName,
        surveyCreator: surveyCreator,
        userAttempted: userAttempted,
        surveyResponse: surveyResponse,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    console.log("success");
    return [data, null];
  } catch (err: any) {
    console.log("error", err);
    if (err.error) {
      return [null, err];
    }
    return [
      null,
      {
        error: "Failed to Post data",
      },
    ];
  }
};

export const getUserSurvey = async (token: any) => {
  try {
    const url = apiUrl + "/getUserSurveys";

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw data;
    }

    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export const deleteSurvey = async (token: any, surveyId: any) => {
  try {
    const url = apiUrl + "/deleteSurvey";

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        surveyId,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw data;
    }

    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export const getSurveyRes = async (token: any, surveyName: string) => {
  try {
    const url = apiUrl + "/getSurveyResponse/" + surveyName;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      console.log("champak");
      throw data;
    }

    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export const getSurveyResponse = async (token: string, surveyName: string) => {
  try {
    const url = apiUrl + "/getSurveyResponse/" + surveyName;
    //console.log("jjjj", token);
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return [data, null];
  } catch (err) {
    return [null, err];
  }
};

export default getSurvey;
