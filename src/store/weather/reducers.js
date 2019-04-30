import { 
  LOAD_WEATHERS_REQUESTED,
  LOAD_WEATHERS_FULFILLED,
  LOAD_WEATHERS_REJECTED
} from "./action-types";

const INITIAL_STATE = {
  list: null,
  loading: false,
  error: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_WEATHERS_REQUESTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOAD_WEATHERS_FULFILLED: {
        return {
          ...state,
          loading: false,
          list: action.payload
        };
      }
    case LOAD_WEATHERS_REJECTED: {
      return {
        ...INITIAL_STATE,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
