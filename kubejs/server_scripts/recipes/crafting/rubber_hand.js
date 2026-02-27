// For items.
ServerEvents.recipes(event => {
  event.shaped('create:brass_hand', [
    ' A ',
    'SSS',
    ' S '
  ], {
	A: 'create:andesite_alloy',
    S: 'kubejs:rubber'
  }
})