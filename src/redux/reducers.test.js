import reducer from "./reducers";
import * as types from "./actionTypes";

describe("progress bar reducer", () => {
  const initialState = {
    activeProgressBarIndex: 0,
    progressBars: [],
    buttons: [],
    limit: 120,
    isLoading: true,
    hasErrorLoading: false
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_ACTIVE_PROGRESS_BAR", () => {
    expect(
      reducer(initialState, {
        type: types.SET_ACTIVE_PROGRESS_BAR,
        index: 1
      })
    ).toEqual(Object.assign({}, initialState, { activeProgressBarIndex: 1 }));

    expect(
      reducer(initialState, {
        type: types.SET_ACTIVE_PROGRESS_BAR,
        index: 2
      })
    ).toEqual(Object.assign({}, initialState, { activeProgressBarIndex: 2 }));
  });

  it("should handle UPDATE_PROGRESS_BAR", () => {
    expect(
      reducer(
        {
          ...initialState,
          progressBars: [0, 0, 20]
        },
        {
          type: types.UPDATE_PROGRESS_BAR,
          index: 1,
          value: 5
        }
      )
    ).toEqual({
      ...initialState,
      progressBars: [0, 5, 20]
    });

    expect(
      reducer(
        {
          ...initialState,
          progressBars: [0, 0, 20]
        },
        {
          type: types.UPDATE_PROGRESS_BAR,
          index: 2,
          value: -10
        }
      )
    ).toEqual({
      ...initialState,
      progressBars: [0, 0, 10]
    });
  });

  it("Should handle SUCCESS_LOADING_BARS", () => {
    expect(
      reducer(
        {
          ...initialState,
          progressBars: [0, 0, 20],
          buttons: [0, 0, 0],
          limit: 100
        },
        {
          type: types.SUCCESS_LOADING_BARS,
          data: {
            bars: [0, 0, 10],
            buttons: [0, 0, -20],
            limit: 200
          }
        }
      )
    ).toEqual({
      ...initialState,
      progressBars: [0, 0, 10],
      buttons: [0, 0, -20],
      limit: 200
    });
  });
});
