
ServerEvents.recipes(event => {
  event.recipes.create.splashing(['minecraft:sand', Item.of('mekanism:dirty_dust_lead').withChance(0.05)])
})
// mekanism:dust_lead / mekanism:dirty_dust_lead / mekanism:nugget_lead / mekanism:ingot_lead