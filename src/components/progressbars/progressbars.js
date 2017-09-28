import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProgressBar from "../progressbar/progressbar";

import "./progressbars.css";

export const ProgressBars = ({ bars = [], limit = 100 }) =>
  <div>
    <div className="bars">
      {bars.map((bar, index) => {
        let normalizedWidth = bar / limit * 100;
        let width = `${normalizedWidth}%`;
        let overloaded = normalizedWidth > 100;
        if (overloaded) {
          width = "100%";
        }

        let text = `${Math.ceil(normalizedWidth)}%`;

        return (
          <div className="bars__bar" key={index}>
            <ProgressBar text={text} value={width} overloaded={overloaded} />
          </div>
        );
      })}
    </div>
  </div>;

ProgressBars.propTypes = {
  bars: PropTypes.array,
  limit: PropTypes.number
};

const mapStateToProps = state => {
  return {
    bars: state.progressBars,
    limit: state.limit
  };
};

export default connect(mapStateToProps)(ProgressBars);
