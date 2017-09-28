import React from 'react'
import PropTypes from 'prop-types'
import './progressbar.css'
import classNames from 'classnames'

const ProgressBar = ({ text = "", value = "0", overloaded = false }) => {
  
  let classes = classNames({
    bar__progress: true,
    "bar__progress--overloaded" : overloaded
  })

  return (
    <div className="bar">
      <div 
        className={classes}
        style={{width: value}} >
          
      </div>
      <div className="bar__text">{text}</div>
    </div>
  )
}

ProgressBar.propTypes = {
  text: PropTypes.string,
  overloaded: PropTypes.bool
}

export default ProgressBar