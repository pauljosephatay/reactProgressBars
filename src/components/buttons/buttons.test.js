import React from 'react'
import { shallow } from 'enzyme'
import { Buttons } from './buttons'
import ProgressBarButton from '../progressbar/button/progressbar-button'
import Button from '../button/button'


describe('Buttons component', () => {

  let click = () => {}

  it('Should render properly',() => {
    const component = shallow(<Buttons />)
    expect(component.exists()).toEqual(true)
  })

  it ('Should render right number of buttons', () => {
    const buttons = [5,38,-22,-23]

    const component = shallow(<Buttons buttons={ buttons } />)
    const componentButtons = component.find(ProgressBarButton)
    expect( componentButtons ).toHaveLength(4)

  })


  it('Should call onButtonClick when a button is click', () => {
    const buttons = [5,-23]
    const activeProgressBarIndex = 0;

    const fn = jest.fn();

    const component = shallow(<Buttons 
      buttons={ buttons }
      onButtonClick={fn}
      activeProgressBarIndex={activeProgressBarIndex} />)

    const componentButtons = component.find(ProgressBarButton)
    const button = componentButtons.at(0)
    
    button.simulate('click', { preventDefault() {} });
    expect(fn).toBeCalledWith(activeProgressBarIndex, buttons[0])


  })

})