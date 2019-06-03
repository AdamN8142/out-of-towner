export const addIndica = (indica) => ({
  type: 'ADD_INDICA',
  indica
})

export const addSativa = (sativa) => ({
  type: 'ADD_SATIVA',
  sativa
})

export const addHybrid = (hybrid) => ({
  type: 'ADD_HYBRID',
  hybrid
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})

export const addDescription = (id, desc, filter) => ({
  type: 'ADD_DESCRIPTION',
  id,
  desc,
  filter
})