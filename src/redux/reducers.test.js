import reducer from './reducers'
import * as types from './actionTypes'

describe('progress bar reducer', () => {

  const initialState = {
      activeProgressBarIndex: 0,
      progressBars: [22,78,75],
      buttons:[5,38,-22,-23]
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState
    )
  })

  it('should handle SET_ACTIVE_PROGRESS_BAR', () => {
    expect(
      reducer(initialState, {
        type: types.SET_ACTIVE_PROGRESS_BAR,
        index: 1
      })
    ).toEqual({
      activeProgressBarIndex: 1,
      progressBars: [22,78,75],
      buttons:[5,38,-22,-23]
    })

    expect(
      reducer(
        initialState,
        {
          type: types.SET_ACTIVE_PROGRESS_BAR,
          index: 2
        }
      )
    ).toEqual({
          activeProgressBarIndex: 2,
          progressBars: [22,78,75],
          buttons:[5,38,-22,-23]
        })
  })



  it('should handle SET_PROGRESS_BAR', () => {
    expect(
      reducer(initialState, {
        type: types.SET_PROGRESS_BAR,
        index: 1,
        value: 50
      })
    ).toEqual({
      activeProgressBarIndex: 0,
      progressBars: [22,50,75],
      buttons:[5,38,-22,-23]
    })

    expect(
      reducer(
        initialState,
        {
          type: types.SET_PROGRESS_BAR,
          index: 2,
          value: 120
        }
      )
    ).toEqual({
          activeProgressBarIndex: 0,
          progressBars: [22,78,120],
          buttons:[5,38,-22,-23]
        })
  })

})