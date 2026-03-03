// For items.
ServerEvents.recipes(event => {
  event.shaped('create:andesite_funnel', [
    'A  ',
    'R  ',
    'R  '
  ], {
	A: 'kubejs:andesite_mechanism',
    R: 'kubejs:rubber',
  })
})