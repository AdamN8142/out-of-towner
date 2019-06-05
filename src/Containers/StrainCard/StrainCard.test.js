import { mapStateToProps } from '../StrainCard/StrainCard'

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

  it('should return a description prop', () => {
    const mockState = {
      description: 'THE GOOD OL GRATEFULDEAD',
      name: 'Adam'
    }
    const expected = {
      description: 'THE GOOD OL GRATEFULDEAD',
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should return effects prop', () => {
    const mockState = {
      effects: ['i','am','not'],
      name: 'Adam'
    }
    const expected = {
      effects: ['i','am','not'],
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })

  it('should return a flavors prop', () => {
    const mockState = {
      flavors: ['sweet','chocolate'],
      name: 'Adam'
    }
    const expected = {
      flavors: ['sweet','chocolate'],
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('StrainCard', () => {
  it('should match snapshot', () => {
    let wrapper
    expect(wrapper).toMatchSnapshot()
  })
})

