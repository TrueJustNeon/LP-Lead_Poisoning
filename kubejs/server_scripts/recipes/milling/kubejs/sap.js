ServerEvents.recipes(event => {
  event.recipes.create.milling(Item.of('kubejs:sap').withChance(0.33), "#minecraft:logs")
})