// For items.
ServerEvents.recipes(event => {
  event.shaped('create:millstone', [
    ' A ',
    'IKI',
    ' S '
  ], {
	A: 'kubejs:andesite_mechanism',
    C: 'create:cog',
    K: 'create:andesite_casing',
	S: '#minecraft:stone'
  })
})