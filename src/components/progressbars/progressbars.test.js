import React from 'react'
import { shallow } from 'enzyme'
import { ProgressBars } from './progressbars'
import ProgressBar from '../progressbar/progressbar'


describe('ProgressBars component', () => {

  it('Should render properly', () => {
    const component = shallow(<ProgressBars />)
    expect(component.exists()).toEqual(true)
  })

  it ('Should render right number of progressbars', () => {
    const bars = [12, 56, 145] 

    const component = shallow(<ProgressBars bars={ bars } />)
    const componentBars = component.find(ProgressBar)
    expect( componentBars ).toHaveLength(3)

  })

  it ('Should pass the normalised width progressbars', () => {
    const bars = [12, 56] 
    const limit = 100

    const component = shallow(<ProgressBars bars={ bars } limit={limit} />)
    const componentBars = component.find(ProgressBar)
    
    let componentBar = componentBars.get(0);

    let expectedWidth = `${bars[0]/limit*100}%`
    expect(componentBar.props.value).toEqual(expectedWidth)


  })


})