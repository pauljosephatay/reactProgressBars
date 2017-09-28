import {
  UPDATE_PROGRESS_BAR,
  SET_ACTIVE_PROGRESS_BAR,
  IS_LOADING_BARS,
  ERROR_LOADING_BARS,
  SUCCESS_LOADING_BARS
} from "./actionTypes";

export function updateProgressBar(progressBar) {
  return {
    type: UPDATE_PROGRESS_BAR,
    index: progressBar.index,
    value: progressBar.value
  };
}

export function setActiveProgressBar(index) {
  return { type: SET_ACTIVE_PROGRESS_BAR, index };
}

export function isLoadingBars(bool) {
  return {
    type: IS_LOADING_BARS,
    isLoading: bool
  };
}

export function hasErrorLoadingBars(bool) {
  return {
    type: ERROR_LOADING_BARS,
    hasError: bool
  };
}

export function successLoadingBars(data) {
  return {
    type: SUCCESS_LOADING_BARS,
    data: data
  };
}

export function fetchData(url) {
  return dispatch => {
    dispatch(isLoadingBars(true));
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(isLoadingBars(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(successLoadingBars(data)))
      .catch(ex => dispatch(hasErrorLoadingBars(true)));
  };
}
