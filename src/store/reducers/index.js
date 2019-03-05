import settings from "./settings";
import { combineReducers } from "redux";
import stepCounterReducer from './stepCounter';
import increment from './stepCounter';
import decrement from './stepCounter';
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  settings,
  stepCounterReducer,
  increment,
  decrement,
  form: formReducer
});

export default reducers;
