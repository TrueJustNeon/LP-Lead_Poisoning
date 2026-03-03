// For items.
ServerEvents.recipes(event => {
  event.shaped('create:brass_funnel', [
    'BE ',
    'RR ',
    'RR '
  ], {
	B: 'create:precision_mechanism',
    E: 'create:electron_tube',
    R: 'kubejs:rubber',
  })
})