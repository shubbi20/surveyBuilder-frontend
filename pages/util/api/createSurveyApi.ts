import apiUrl from "./apiUrl";

const createSurveyApi = async ({
  surveyName,
  selectionQuestion,
  token,
}: any) => {
  try {
    const url = apiUrl + "/survey";
    console.log("sending req");
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        surveyName,
        surveyQuestion: selectionQuestion,
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
        error: "Failed to fetch data",
      },
    ];
  }
};

export default createSurveyApi;
