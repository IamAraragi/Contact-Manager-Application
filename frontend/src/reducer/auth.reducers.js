import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constants/auth.constants";

const initialState = {
  loading: false,
  isAuthenticated: false,
  currentUser: localStorage.getItem("user")
    ? localStorage.getItem("user")
    : null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false, currentUser: null };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        currentUser: action.payload,
      };
    case LOGIN_FAIL:
      return { loading: false, isAuthenticated: false, currentUser: null };
    case REGISTER_REQUEST:
      return { loading: true };
    case REGISTER_SUCCESS:
      return { loading: false };
    case REGISTER_FAILURE:
      return { loading: false };
    default:
      return { ...state };
  }
};
