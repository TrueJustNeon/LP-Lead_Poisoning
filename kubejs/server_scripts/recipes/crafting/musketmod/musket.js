// Assembly, smithing, etc goes here.
ServerEvents.recipes(event => {
  event.shaped('musketmod:musket', [
    'I  ',
    ' IN',
    ' TF'
  ], {
    N: 'minecraft:iron_nugget',
	T: 'minecraft:tripwire_hook',
    I: 'create:iron_sheet',
    F: 'kubejs:flint_mechanism'
  })
 })