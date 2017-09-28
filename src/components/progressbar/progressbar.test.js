import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './progressbar';

describe('progressbar component', () => {
  it('Should render successfully', () => {
    const component = shallow(<ProgressBar text="25%" value="25%" />);
    expect(component.exists()).toEqual(true);
  });

  it('Should render text successfully', () => {
    const label = "25%"
  
    const component = shallow(<ProgressBar text={label} value="25%"/>);
    expect(component.text()).toEqual(label);
  });

  it('Should render progress successfully', () => {
    let width = "25%"

    let component = shallow(<ProgressBar text="25%" value={width}/>);
    let progress = component.find('div.bar__progress')
    expect(progress.props().style.width).toBeDefined()
    expect(progress.props().style.width).toEqual(width)

    width = "37%"

    component = shallow(<ProgressBar text="37%" value={width}/>);
    progress = component.find('div.bar__progress')
    expect(progress.props().style.width).toBeDefined()
    expect(progress.props().style.width).toEqual(width)


  });


});