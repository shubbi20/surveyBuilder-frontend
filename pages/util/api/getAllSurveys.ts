import apiUrl from "./apiUrl";

const getAllSurveys = async (token: any) => {
  try {
    const url = apiUrl + `/getAllSurveys`;

    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    console.log(data);
  } catch (err) {}
};
