import axios from "axios";
// import authHeader from "../utils/authHeader";
import authHeader from "../utils/authHeader";
// import authHeader from "../utils/authHeader";
const tokenHeader = authHeader();
export const getAllContacts = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "contacts", {
    headers: tokenHeader,
  });
  if (response.data) {
    localStorage.setItem("contacts", response.data);
  }
  return response.data;
};

export const addContants = async (contactInfo) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "contacts",
    contactInfo,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "x-access-token": tokenHeader["x-access-token"],
      },
    }
  );

  return response.data;
};

export const deleteContacts = async (contactId) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "contacts/" + contactId,
    {
      headers: tokenHeader,
    }
  );

  return response.data;
};
