import { SET_PROGRESS_BAR, SET_ACTIVE_PROGRESS_BAR } from './actionTypes'

export function setProgressBar(progressBar) {
  return { 
    type: SET_PROGRESS_BAR, 
    index: progressBar.index, 
    value: progressBar.value, }
}

export function setActiveProgressBar(index) {
  return { type: SET_ACTIVE_PROGRESS_BAR, index }
}