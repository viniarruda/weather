import { createAction } from "redux-actions";
import { LOAD_WEATHERS_REQUESTED, LOAD_WEATHERS_FULFILLED, LOAD_WEATHERS_REJECTED } from "./action-types";

export const loadWeatherRequested = createAction(LOAD_WEATHERS_REQUESTED);
export const loadWeatherFulfilled = createAction(LOAD_WEATHERS_FULFILLED);
export const loadWeatherRejected = createAction(LOAD_WEATHERS_REJECTED);