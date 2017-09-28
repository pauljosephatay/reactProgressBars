import React from "react";
import { shallow } from "enzyme";
import Button from "./button";

describe("button component", () => {
  it("Should render successfully", () => {
    let fn = () => {};
    const component = shallow(<Button label="Button" onClick={fn} />);
    expect(component.exists()).toEqual(true);
  });

  it("Should render label successfully", () => {
    const label = "Button";
    let fn = () => {};
    const component = shallow(<Button label={label} onClick={fn} />);
    expect(component.text()).toEqual(label);
  });

  it("Should call onclick", () => {
    let state = false;
    let fn = function() {
      state = true;
    };

    const component = shallow(<Button label="Button" onClick={fn} />);
    component.find("button").simulate("click", { preventDefault() {} });
    expect(state).toEqual(true);
  });
});
