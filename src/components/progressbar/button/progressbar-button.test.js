import React from 'react'
import { shallow } from 'enzyme'
import ProgressBarButton from './progressbar-button'
import Button from '../../button/button'

describe('ProgressBarButton Component', () => {
  it('Should render properly', () => {
    const component = shallow( <ProgressBarButton /> )
    expect(component.exists()).toEqual(true);
  })

  it ('Should pass label to Button as String', () => {
    let label ="-35"

    const component = shallow( <ProgressBarButton value={+label}/> )
    const button = component.find(Button)

    expect(button.props().label).toEqual(label);
  })


  it ('Should pass onclick with value number', () => {
    let value =-35
    const fn = jest.fn();


    const component = shallow( <ProgressBarButton value={value} onClick={fn}/> )
    const button = component.find(Button)
    button.simulate('click', { preventDefault() {} });
    expect(fn).toBeCalledWith(value)


  })


})