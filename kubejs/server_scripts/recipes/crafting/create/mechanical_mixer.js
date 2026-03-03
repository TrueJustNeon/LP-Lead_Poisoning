// For items.
ServerEvents.recipes(event => {
  event.shaped('create:mechanical_mixer', [
    ' C ',
    ' A ',
    ' W '
  ], {
	A: 'kubejs:andesite_mechanism',
    C: 'create:cog',
	W: 'create:whisk'
  })
})