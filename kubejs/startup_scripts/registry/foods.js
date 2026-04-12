// Items like bread, etc.
StartupEvents.registry('item', event => {
  event.create('ohee_easter_egg')
  .displayName("FUCK OHEE'S IDEAS!!")
  .food(food => {
    food
      .hunger(2)
      .saturation(3)
      .alwaysEdible()
  })
})