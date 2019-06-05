import { mapStateToProps, mapDispatchToProps} from '../StrainContainer/StrainContainer'
import * as actions from '../../Actions/index'

describe('mapStateToProps', () => {
  it('should return a strain prop', () => {
    const mockState = {
      strain: {indica: [{a:'1'}, {b:'2'}]},
      name: 'Adam'
    }
    const expected = {
      strain: {indica: [{a:'1'}, {b:'2'}]},
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
  it('should return a filter prop', () => {
    const mockState = {
      filter: 'INDICA',
      name: 'Adam'
    }
    const expected = {
      filter: 'INDICA'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should return a loading prop', () => {
    const mockState = {
      loading: false,
      name: 'Adam'
    }
    const expected = {
      loading: false
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should return an error prop', () => {
    const mockState = {
      name: 'Adam',
      error: 't'
    }
    const expected = {
      error: 't'
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it.skip('should dispatch details', () => {
    const mockDetails = 'hi'
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.addDetails(mockDetails)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addDetails(mockDetails)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch effects', () => {
    const mockEffects = {hi:['e']}
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.addEffects(mockEffects)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addEffects(mockEffects)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch flavors', () => {
    const mockFlavors = ['me', 'my']
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.addFlavors(mockFlavors)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addFlavors(mockFlavors)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  
  it('should dispatch an error', () => {
    const mockMessage = 'NOOOO'
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.setError(mockMessage)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setError(mockMessage)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch isLoading with bool', () => {
    const mockBool= false
    const mockDispatch = jest.fn()
    const actionToDispatch = actions.isLoading(mockBool)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.isLoading(mockBool)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
describe('StrainContainer', () => {
  it('should match snapshot', () => {
    let wrapper
    expect(wrapper).toMatchSnapshot()
  })
})


