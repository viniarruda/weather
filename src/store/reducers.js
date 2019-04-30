import { combineReducers } from "redux";
import weather from "./weather/reducers"

const appReducer = combineReducers({
  weather
});

export default (state, action) => appReducer(state, action);
