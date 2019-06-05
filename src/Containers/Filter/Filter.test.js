import { mapStateToProps, mapDispatchToProps} from '../Filter/Filter'
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
  it('should return dispatch with filter', () => {
    const mockFilter = 'SATIVA'
    const mockDispatch  = jest.fn()
    const actionToDispatch = actions.setFilter(mockFilter)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setFilter(mockFilter)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch sativa with addSativa', () => {
    const mockSativa = [{a:2}, {b:3}]
    const mockDispatch  = jest.fn()
    const actionToDispatch = actions.addSativa(mockSativa)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addSativa(mockSativa)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch hybrid with addHybrid', () => {
    const mockHybrid = [{a:1}, {b:7}]
    const mockDispatch  = jest.fn()
    const actionToDispatch = actions.addHybrid(mockHybrid)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addHybrid(mockHybrid)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should dispatch sativa with addIndica', () => {
    const mockIndica = [{a:23}, {b:35}]
    const mockDispatch  = jest.fn()
    const actionToDispatch = actions.addIndica(mockIndica)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addIndica(mockIndica)
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

describe('Filter', () => {
  it('should match snapshot', () => {
    let wrapper
    expect(wrapper).toMatchSnapshot()
  })
})
