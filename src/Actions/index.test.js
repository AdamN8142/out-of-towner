import * as actions from './index'

describe('actions', () => {
  it('should return an action obj type "ADD_INDICA" and payload',() => {
    const indica = [
      {weed: 2 },
      {weed: 3}
    ]
    const expected = {
      type: 'ADD_INDICA',
      indica
    }
    const result = actions.addIndica(indica)
    expect(result).toEqual(expected)
  })

  it('should return an action obj type "ADD_SATIVA" and payload',() => {
    const sativa = [
      {weed: 2 },
      {weed: 3}
    ]
    const expected = {
      type: 'ADD_SATIVA',
      sativa
    }
    const result = actions.addSativa(sativa)
    expect(result).toEqual(expected)
  })

  it('should return an action obj type "ADD_HYBRID" and payload',() => {
    const hybrid = [
      {weed: 2 },
      {weed: 3}
    ]
    const expected = {
      type: 'ADD_HYBRID',
      hybrid
    }
    const result = actions.addHybrid(hybrid)
    expect(result).toEqual(expected)
  })

  it('should return an action obj type "SET_FILTER" and payload',() => {
    const filter = "hello"
    const expected = {
      type: 'SET_FILTER',
      filter
    }
    const result = actions.setFilter(filter)
    expect(result).toEqual(expected)
  })

  it('should return an action obj type "ADD_DESCRIPTION" and payload',() => {
    const description = "hello there friend"
    const expected = {
      type: 'ADD_DESCRIPTION',
      description
    }
    const result = actions.addDescription(description)
    expect(result).toEqual(expected)
  })
})