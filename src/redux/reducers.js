import { SET_PROGRESS_BAR, SET_ACTIVE_PROGRESS_BAR } from './actionTypes'

const initialState = {
  activeProgressBarIndex: 0,
  progressBars: [22,78,75],
  buttons:[5,38,-22,-23]
}

function progressBarApp(state = initialState, action) {

  switch (action.type) {
    case SET_ACTIVE_PROGRESS_BAR:
      return Object.assign({}, state, {
        activeProgressBarIndex: action.index
      })
    case SET_PROGRESS_BAR:
      return Object.assign({}, state, {
        progressBars: state.progressBars.map( ( progressBar, index ) => {
          if (index === action.index) {
            return action.value
          }
          return progressBar
        })
      })
    default:
      return state
  }

  return state
}

export default progressBarApp