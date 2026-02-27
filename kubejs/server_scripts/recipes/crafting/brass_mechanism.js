// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('create:precision_mechanism', [
    'HBS',
    'EAE',
    'BBB'
  ], {
    H: 'kubejs:hammer'
    S: 'kubejs:screwdriver'
    B: 'create:brass_sheet'
    A: 'kubejs:andesite_mechanism'
    E: 'create:electron_tube'
  }
 })