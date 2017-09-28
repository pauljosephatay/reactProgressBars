import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../button/button'
import classNames from 'classnames'

import './progress-bar-button.css'

const ProgressBarButton = ( { value, onClick, className } ) => {

  let label = `${value}`

  const fn = () => {
    onClick(value)
  }

  let classes = classNames( 'progress-bar-button', className )


  return (
    <div className={ classes }>
    <Button label={label} onClick={fn} />
    </div>
    )
  }


ProgressBarButton.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}

export default ProgressBarButton
