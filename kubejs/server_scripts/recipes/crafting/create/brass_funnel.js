// For items.
ServerEvents.recipes(event => {
  event.shaped('create:brass_funnel', [
    'B  ',
    'R  ',
    'R  '
  ], {
	B: 'create:precision_mechanism',
    R: 'kubejs:rubber',
  })
})