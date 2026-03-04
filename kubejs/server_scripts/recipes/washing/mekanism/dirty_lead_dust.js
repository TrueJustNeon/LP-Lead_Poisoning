
ServerEvents.recipes(event => {
  event.recipes.create.splashing([Item.of('minecraft:clay_ball').withChance(0.25), Item.of('mekanism:dirty_dust_lead').withChance(0.10)], 'minecraft:sand')
})
// mekanism:dust_lead / mekanism:dirty_dust_lead / mekanism:nugget_lead / mekanism:ingot_lead