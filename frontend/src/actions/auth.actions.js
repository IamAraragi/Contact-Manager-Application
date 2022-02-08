import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/auth.constants";

export const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload: payload };
};

export const loginFailure = () => {
  return { type: LOGIN_FAIL };
};

export const registerRequest = () => {
  return { type: REGISTER_REQUEST };
};

export const registerSuccess = () => {
  return { type: REGISTER_SUCCESS };
};

export const registerFailure = () => {
  return { type: REGISTER_FAILURE };
};

export const logout = () => {
  return { type: LOGOUT };
};
