// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('minecraft:crossbow', [
    'TRT',
    'IWI',
    ' S '
  ], {
    S: 'minecraft:stick',
    R: 'minecraft:string',
	T: 'minecraft:tripwire_hook',
    I: 'create:iron_sheet',
    W: 'kubejs:wooden_mechanism'
  }
 })