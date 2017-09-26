import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('button component', () => {
  it('Should render successfully', () => {
    const component = shallow(<Button children="Button" />);
    expect(component.exists()).toEqual(true);
  });

  it('Should render children successfully', () => {
    const label = "Button";

    const component = shallow(<Button children={label} />);
    expect(component.text()).toEqual(label);
  });


  it('Should call onclick', () => {

    let state = false;
    let fn = function() {
      state = true;
    }

    const component = shallow(<Button children="Button" onClick={fn} />);
    component.find('button').simulate('click', { preventDefault() {} });
    expect(state).toEqual(true);
  });

});