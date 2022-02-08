import {
  ADD_FAILURE,
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_FAILURE,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  GETALL_FAILURE,
  GETALL_REQUEST,
  GETALL_SUCCESS,
} from "../constants/contacts.constants";

export const getAllRequest = () => {
  return { type: GETALL_REQUEST };
};

export const getAllSuccess = () => {
  return { type: GETALL_SUCCESS };
};

export const getAllFailure = () => {
  return { type: GETALL_FAILURE };
};

export const addContactRequest = () => {
  return { type: ADD_REQUEST };
};

export const addContactSuccess = () => {
  return { type: ADD_SUCCESS };
};

export const addContactFailure = () => {
  return { type: ADD_FAILURE };
};

export const deleteContactRequest = () => {
  return { type: DELETE_REQUEST };
};

export const deleteContactSucess = () => {
  return { type: DELETE_SUCCESS };
};

export const deleteContactFailure = () => {
  return { type: DELETE_FAILURE };
};
