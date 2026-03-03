// For items.
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create:empty_blaze_burner', 1), // arg 1: output
  [
    'III',
    'IAI', // arg 2: the shape (array of strings)
    'NNN'
  ],
  {
    I: 'create:iron_sheet',
	A: 'kubejs:andesite_mechanism',
	N: 'minecraft:netherrack'
  }
)
})
