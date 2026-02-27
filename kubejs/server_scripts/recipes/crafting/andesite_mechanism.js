// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('kubejs:flint_mechanism', [
    'HCS',
    'CWC',
    'GAG'
  ], {
    H: 'kubejs:hammer'
    S: 'kubejs:screwdriver'
    C: 'create:cogwheel'
    W: 'kubejs:wooden_mechanism'
    G: 'minecraft:gold_ingot'
    A: 'create:andesite_alloy'
  })