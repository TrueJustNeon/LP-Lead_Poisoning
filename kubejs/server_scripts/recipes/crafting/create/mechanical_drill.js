// For items.
ServerEvents.recipes(event => {
  event.shaped('create:mechanical_drill', [
    ' I ',
    'IAI',
    ' C '
  ], {
	A: 'kubejs:andesite_mechanism',
    I: 'minecraft:iron_ingot',
	C: 'create:andesite_casing'
  })
})