// Assembly, smithing, etc goes here.
onEvent('recipes', event => {
  event.shaped('kubejs:flint_mechanism', [
    'HIS',
    'FWI',
    'IIF'
  ], {
    H: 'kubejs:hammer'
    S: 'kubejs:screwdriver'
    F: 'minecraft:flint'
    W: 'kubejs:wooden_mechanism'
    I: 'minecraft:iron_ingot'
  })