ServerEvents.recipes(event => {
event.smithing(
  'musketmod:cartridge',                     // arg 1: output
  'minecraft:paper', // arg 2: the smithing template
  'mincraft:gunpowder',                          // arg 3: the item to be upgraded
  'minecraft:iron_nugget'                            // arg 4: the upgrade item
)
})