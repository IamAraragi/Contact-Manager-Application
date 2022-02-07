import axios from "axios";
import authHeader from "../utils/authHeader";

export const getAllContacts = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "contacts", {
    headers: authHeader(),
  });
  if (response.data) {
    localStorage.setItem("contacts", response.data);
  }
  return response.data;
};
