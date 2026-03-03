// For items.
ServerEvents.recipes(event => {
  event.shaped('create:mechanical_press', [
    ' S ',
    ' A ',
    ' I '
  ], {
	A: 'kubejs:andesite_mechanism',
    S: 'create:shaft',
	I: 'minecraft:iron_block'
  })
})