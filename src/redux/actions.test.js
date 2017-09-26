import * as actions from './actions'
import * as types from './actionTypes'

describe('actions', () => {
  it('should create an action set the active progress bar: index', () => {
    const index = 1
    const expectedAction = {
      type: types.SET_ACTIVE_PROGRESS_BAR,
      index
    }
    expect(actions.setActiveProgressBar(index)).toEqual(expectedAction)
  })


  it('should create an action set the progress bar index', () => {
    const progressbar = { index: 1, value: 20 }
    const expectedAction = {
      type: types.SET_PROGRESS_BAR,
      index: progressbar.index,
      value: progressbar.value
    }
    expect(actions.setProgressBar(progressbar)).toEqual(expectedAction)
  })

})