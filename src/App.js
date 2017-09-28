import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import ProgressBars from "./components/progressbars/progressbars";
import Buttons from "./components/buttons/buttons";

import { fetchData } from "./redux/actions";
import { END_POINT } from "./constants";

export class App extends Component {
  componentDidMount() {
    this.props.fetchData(END_POINT);
  }

  render() {
    let { isLoading, hasErrored } = this.props;
    let component = (
      <div className="App__Bars">
        <div className="App__Title">Progress Bars</div>
        <ProgressBars />
        <Buttons />
      </div>
    );

    if (isLoading) {
      let message = !hasErrored ? "Loading..." : "Sorry, something went wrong.";
      component = (
        <div className="App__Loader">
          <span>
            {message}
          </span>
        </div>
      );
    }

    return (
      <div className="App">
        {component}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.hasErrorLoading,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);