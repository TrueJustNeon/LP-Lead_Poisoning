// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('musketmod:blunderbuss', [
    'C  ',
    ' CN',
    ' TF'
  ], {
    N: 'minecraft:iron_nugget',
	T: 'minecraft:tripwire_hook',
    C: 'create:copper_sheet',
    F: 'kubejs:flint_mechanism'
  })
 })