import axios from "axios";

export const register = async (userEmail, userPassword) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "user/register",
    {
      email: userEmail,
      password: userPassword,
    }
  );

  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "user/login",
    {
      email: email,
      password: password,
    }
  );

  if (!response.data.token) {
    console.log("token not present");
  }

  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};
