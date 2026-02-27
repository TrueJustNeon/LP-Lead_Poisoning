ServerEvents.recipes(event => {
event.smithing(
  'create:deployer',                     // arg 1: output
  'create:electron_tube', // arg 2: the smithing template
  'create:precision_mechanism',                          // arg 3: the item to be upgraded
  'create:brass_hand'                            // arg 4: the upgrade item
)
})