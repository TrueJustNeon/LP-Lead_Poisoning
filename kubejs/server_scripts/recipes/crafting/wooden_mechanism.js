// Assembly, smithing, etc goes here.
onEvent('recipes', event => {
  event.shaped('kubejs:wooden_mechanism', [
    'SSS',
    'SSO',
    'OOI'
  ], {
    S: 'minecraft:string'
    O: 'minecraft:oak_slab'
    I: 'minecraft:iron_ingot'
  })