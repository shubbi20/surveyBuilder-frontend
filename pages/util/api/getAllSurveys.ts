import apiUrl from "./apiUrl";

const getAllSurveys = async (token: any) => {
  try {
    const url = apiUrl + "/getAllSurveys";

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

export default getAllSurveys;
