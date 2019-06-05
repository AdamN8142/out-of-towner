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


