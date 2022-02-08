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
  UPDATE_FAILURE,
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
} from "../constants/contacts.constants";

const initialState = { loading: false };

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_REQUEST:
    case ADD_REQUEST:
    case DELETE_REQUEST:
    case UPDATE_REQUEST:
      return { loading: true };
    case GETALL_SUCCESS:
    case ADD_SUCCESS:
    case DELETE_SUCCESS:
    case UPDATE_SUCCESS:
      return { loading: false };
    case GETALL_FAILURE:
    case ADD_FAILURE:
    case DELETE_FAILURE:
    case UPDATE_FAILURE:
      return { loading: false };
    default:
      return { loading: false };
  }
};
