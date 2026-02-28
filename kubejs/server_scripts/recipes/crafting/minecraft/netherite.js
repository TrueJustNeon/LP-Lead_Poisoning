// For items.
ServerEvents.recipes(event => {
  event.shaped('minecraft:netherite_ingot', [
    'SSS',
    'SSS',
    'SSS'
  ], {
	S: 'kubejs:netherite_nugget'
  })
})