import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProgressBarButton from '../progressbar/button/progressbar-button'
import { updateProgressBar, setActiveProgressBar } from '../../redux/actions'

import Select from 'react-select'
import 'react-select/dist/react-select.css';

import './buttons.css'

export const Buttons = ({ buttons = [], 
  activeProgressBarIndex = 0,
  barsLength,
  limit,
  onButtonClick,
  onSelect }) => {
  
  let clickHandler = (value) => {
    return () => {
      onButtonClick( activeProgressBarIndex, value ) 
    }
  }

  let selectOptions = [...Array(barsLength).keys()].map( ( index ) => {
    return { value: index, label: `Progress Bar ${index+1}`, clearableValue: false }
  });


  let selectHandler = ( option ) => {
    onSelect(option.value)
  }


  return (
  <div>
    <div className="Buttons">
    <div className="Buttons__Select">
      <Select 
        options={selectOptions}
        onChange={selectHandler}
        clearable={false}
        value={activeProgressBarIndex} />
    </div>
    {( buttons.map( (value, index) => {
      /*
      I believe its appropriate to normalise the button value displayed so that visual change more or less
      depict the user's intent. However as given in the breakdown-"The amount of buttons to display 
      and what value they increment or decrement the selected bar",
      i am using the value as is. The demo is alright because i believe the limit on that is 100.
      let normalizedValue = value/limit*100
      normalizedValue = Math.round(normalizedValue)
      */
      return (
          <ProgressBarButton className="Buttons__Button"
            key={index} value={value}  onClick={ clickHandler( value ) }/>
        )}) )}
    </div>
  </div>
  )
}

Buttons.propTypes = {
  barsLength: PropTypes.number,
  buttons: PropTypes.array,
  activeProgressBarIndex: PropTypes.number
}



const mapStateToProps = state => {
  return {
    barsLength: state.progressBars.length,
    buttons: state.buttons,
    activeProgressBarIndex: state.activeProgressBarIndex,
    limit: state.limit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (index, value ) => {
      dispatch(updateProgressBar({ index, value }))
    },
    onSelect: ( index ) => {
      dispatch(setActiveProgressBar(index))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Buttons)