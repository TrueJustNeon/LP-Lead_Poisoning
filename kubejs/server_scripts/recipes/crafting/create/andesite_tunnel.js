// For items.
ServerEvents.recipes(event => {
  event.shaped('create:andesite_tunnel', [
    'A  ',
    'RR ',
    'RR '
  ], {
	A: 'kubejs:andesite_mechanism',
    R: 'kubejs:rubber',
  })
})