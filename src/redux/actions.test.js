import * as actions from "./actions";
import * as types from "./actionTypes";
import { initialState } from "./reducers";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import nock from "nock";

describe("actions", () => {
  it("should create an action to set the active progress bar: index", () => {
    const index = 1;
    const expectedAction = {
      type: types.SET_ACTIVE_PROGRESS_BAR,
      index
    };
    expect(actions.setActiveProgressBar(index)).toEqual(expectedAction);
  });

  it("should create an action to update the progress bar with index", () => {
    const progressbar = { index: 1, value: 20 };
    const expectedAction = {
      type: types.UPDATE_PROGRESS_BAR,
      index: progressbar.index,
      value: progressbar.value
    };
    expect(actions.updateProgressBar(progressbar)).toEqual(expectedAction);
  });

  it("should create an action to hydrate stores buttons, bars and limit", () => {
    const data = {
      bars: [1],
      buttons: [20],
      limit: 100
    };

    const expectedAction = {
      type: types.SUCCESS_LOADING_BARS,
      data: data
    };
    expect(actions.successLoadingBars(data)).toEqual(expectedAction);
  });

  it("should create an action to set isLoading state", () => {
    const isLoading = false;
    const expectedAction = {
      type: types.IS_LOADING_BARS,
      isLoading: isLoading
    };
    expect(actions.isLoadingBars(isLoading)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("creates SUCCESS_LOADING_BARS when fetching data has been done", () => {
    const data = {
      bars: [1],
      buttons: [20],
      limit: 100
    };

    let scope = nock("http://pb.com/")
      .get("/data")
      .reply(
        200,
        { ...data },
        {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
      );

    const expectedActions = [
      { type: types.IS_LOADING_BARS, isLoading: true },
      { type: types.IS_LOADING_BARS, isLoading: false },
      { type: types.SUCCESS_LOADING_BARS, data: { ...data } }
    ];
    const store = mockStore(initialState);
    const endPoint = "http://pb.com/data";
    const fetchFn = actions.fetchData;
    return store.dispatch(fetchFn(endPoint)).then(() => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates ERROR_LOADING_BARS when fetching fails", () => {
    const data = {
      bars: [1],
      buttons: [20],
      limit: 100
    };

    let scope = nock("http://pb.com/")
      .get("/data")
      .replyWithError("something awful happened", {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      });

    const expectedActions = [
      { type: types.IS_LOADING_BARS, isLoading: true },
      { type: types.ERROR_LOADING_BARS, hasError: true }
    ];
    const store = mockStore(initialState);
    const endPoint = "http://pb.com/data";
    const fetchFn = actions.fetchData;
    return store.dispatch(fetchFn(endPoint)).then(() => {
      // return of async actions

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
