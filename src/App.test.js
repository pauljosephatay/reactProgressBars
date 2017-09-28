import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

import ProgressBars from "./components/progressbars/progressbars";
import Buttons from "./components/buttons/buttons";

describe("App component", () => {
  it("Should render without crashing", () => {
    const component = shallow(<App />);
    expect(component.exists()).toEqual(true);
  });

  it("Should render Loading when isLoading is true", () => {
    const isLoading = true;
    const component = shallow(<App isLoading={isLoading} />);
    const element = component.find(".App__Loader span");
    expect(element.text()).toEqual("Loading...");
  });

  it("Should render Error when hasErrored is true", () => {
    const isLoading = true;
    const hasErrored = true;
    const component = shallow(
      <App isLoading={isLoading} hasErrored={hasErrored} />
    );
    const element = component.find(".App__Loader span");
    expect(element.text()).toEqual("Sorry, something went wrong.");
  });

  it("Should render App__Bars when isLoading is false", () => {
    const isLoading = false;
    const component = shallow(<App isLoading={isLoading} />);

    let element = component.find(".App__Bars");
    expect(element.exists()).toEqual(true);

    element = component.find(ProgressBars);
    expect(element.exists()).toEqual(true);

    element = component.find(Buttons);
    expect(element.exists()).toEqual(true);
  });
});
