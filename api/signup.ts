import apiUrl from "./apiUrl";

const signup = async ({
  name,
  username,
  email,
  age,
  mobile,
  password,
}: any) => {
  try {
    const url = apiUrl + "/signup";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        email,
        age,
        mobile,
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
  } catch (err: any) {
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

export default signup;
