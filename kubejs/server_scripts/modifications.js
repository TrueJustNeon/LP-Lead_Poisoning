// mekanism:pellet_polonium
ItemEvents.modification(event => {
  event.modify('mekanism:pellet_polonium', item => {
    item.foodProperties = food => {
        food.hunger(1)
        food.saturation(1)
        food.fastToEat()
        .effect(
              'minecraft:poison', // Effect
               100, // Duration
               2, // Amplifier
               1.0 // Chance
            )
    }
  })
})