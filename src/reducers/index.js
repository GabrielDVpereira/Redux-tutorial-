import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";

const allReducers = combineReducers({
  counterStore: counterReducer,
  isLoggedStore: isLoggedReducer,
});

export default allReducers;
