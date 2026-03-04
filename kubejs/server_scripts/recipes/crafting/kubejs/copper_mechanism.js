// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:copper_mechanism', [
    'HRS',
    'RWR',
    'CCC'
  ], {
    H: 'kubejs:hammer',
    S: 'kubejs:screwdriver',
    C: 'create:copper_sheet',
    W: 'kubejs:andesite_mechanism',
    R: 'kubejs:rubber'
})
})