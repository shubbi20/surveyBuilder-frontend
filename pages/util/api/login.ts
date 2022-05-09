import apiUrl from "./apiUrl";

const login = async ({ username, password }: any) => {
  try {
    const url = apiUrl + "/login";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
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

export default login;
