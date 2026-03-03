// For items.
ServerEvents.recipes(event => {
  event.shaped('create:millstone', [
    ' A ',
    'CKC',
    ' S '
  ], {
	A: 'kubejs:andesite_mechanism',
    C: 'create:cogwheel',
    K: 'create:andesite_casing',
	S: '#forge:stone'
  })
})