import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducer/auth.reducers";
import { contactsReducer } from "./reducer/contacts.reduer";

// const initialState = {
//   auth: {
//     loading: false,
//     isAuthenticated: false,
//   },
// };

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer);

export { store };
