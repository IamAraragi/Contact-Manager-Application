import axios from "axios";
import authHeader from "../utils/authHeader";

/**
 * Function to get all contacts from the backend api
 * @returns response data
 */
export const getAllContacts = async () => {
  const response = await axios.get(process.env.REACT_APP_API_URL + "contacts", {
    headers: authHeader(),
  });
  if (response.data) {
    localStorage.setItem("contacts", JSON.stringify(response.data));
  }
  return response.data;
};

/**
 * Function to add contacts to the backedn
 * @param {*} contactInfo contact info to be added
 * @returns response data
 */
export const addContacts = async (contactInfo) => {
  const response = await axios.post(
    process.env.REACT_APP_API_URL + "contacts",
    contactInfo,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        "x-access-token": authHeader()["x-access-token"],
      },
    }
  );

  return response.data;
};

/**
 * Function to delete contacts from the backend based on the contact id
 * @param {*} contactId
 * @returns response data from the api
 */
export const deleteContacts = async (contactId) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "contacts/" + contactId,
    {
      headers: authHeader(),
    }
  );

  return response.data;
};

/**
 * Function to update the contact in the backend
 * @param {*} contactId id of the contact to be updated
 * @param {*} contactInfo new contact info to be updated
 * @returns
 */
export const updateContacts = async (contactId, contactInfo) => {
  const response = await axios.put(
    process.env.REACT_APP_API_URL + "contacts/" + contactId,
    contactInfo,
    {
      headers: authHeader(),
    }
  );

  return response.data;
};
