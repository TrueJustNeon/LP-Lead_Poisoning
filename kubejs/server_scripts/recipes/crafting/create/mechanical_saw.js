// For items.
ServerEvents.recipes(event => {
  event.shaped('create:mechanical_saw', [
    'III',
    'IAI',
    ' C '
  ], {
	A: 'kubejs:andesite_mechanism',
    I: 'create:iron_sheet',
	C: 'create:andesite_casing'
  })
})