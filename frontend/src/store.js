import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducer/auth.reducers";

// const initialState = {
//   auth: {
//     loading: false,
//     isAuthenticated: false,
//   },
// };

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export { store };
