import {
  UPDATE_PROGRESS_BAR,
  SET_ACTIVE_PROGRESS_BAR,
  IS_LOADING_BARS,
  ERROR_LOADING_BARS,
  SUCCESS_LOADING_BARS
} from "./actionTypes";

export const initialState = {
  activeProgressBarIndex: 0,
  progressBars: [],
  buttons: [],
  limit: 120,
  isLoading: true,
  hasErrorLoading: false
};

export function progressBars(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PROGRESS_BAR:
      return Object.assign({}, state, {
        activeProgressBarIndex: action.index
      });
    case UPDATE_PROGRESS_BAR:
      return Object.assign({}, state, {
        progressBars: state.progressBars.map((progressBar, index) => {
          if (index === action.index) {
            let newvalue = progressBar + action.value;
            return newvalue <= 0 ? 0 : newvalue;
          }
          return progressBar;
        })
      });
    case SUCCESS_LOADING_BARS:
      return Object.assign({}, state, {
        progressBars: action.data.bars.map(el => el),
        buttons: action.data.buttons.map(el => el),
        limit: action.data.limit
      });
    default:
      return state;
  }

  return state;
}

export const initialFetchState = {
  isLoading: true,
  hasErrorLoading: false
};

export function progressBarsFetch(state = initialFetchState, action) {
  switch (action.type) {
    case IS_LOADING_BARS:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case ERROR_LOADING_BARS:
      return Object.assign({}, state, {
        hasErrorLoading: action.hasError
      });
    default:
      return state;
  }

  return state;
}

function progressBarApp(state = initialState, action) {
  let fetchState = {
    isLoading: state.isLoading,
    hasErrorLoading: state.hasErrorLoading
  };

  return {
    ...progressBars(state, action),
    ...progressBarsFetch(fetchState, action)
  };
}

export default progressBarApp;
