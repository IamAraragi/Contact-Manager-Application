import {
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
