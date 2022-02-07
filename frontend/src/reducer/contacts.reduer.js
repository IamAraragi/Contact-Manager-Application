import {
  GETALL_FAILURE,
  GETALL_REQUEST,
  GETALL_SUCCESS,
} from "../constants/contacts.constants";

const initialState = { loading: false };

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL_REQUEST:
      return { loading: true };
    case GETALL_SUCCESS:
      return { loading: false };
    case GETALL_FAILURE:
      return { loading: false };
    default:
      return { loading: false };
  }
};
