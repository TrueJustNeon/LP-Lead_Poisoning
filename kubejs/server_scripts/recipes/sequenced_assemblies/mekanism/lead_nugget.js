let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let MK = (id, x) => MOD("mekanism", id, x)

ServerEvents.recipes(event => {
  const t = KJ('lead_scrapmetal')
 event.recipes.createSequencedAssembly(
  // Outputs:
      [
        Item.of('mekanism:lead_nugget').withChance(25), // Main output, will appear in JEI as the result
        Item.of('minecraft:iron_nugget').withChance(7), // Rest of these items will be considered Random Salvage
        Item.of('minecraft:bucket').withChance(5),
        Item.of('minecraft:bread').withChance(2)
  ], KJ('pure_dust_lead'), [ // Base
    event.recipes.createDeploying(t, [t, 'mekanism:dust_lead']),
    event.recipes.createDeploying(t, [t, 'mekanism:dust_lead']),
    event.recipes.createDeploying(t, [t, 'mekanism:dust_lead']),
    event.recipes.createDeploying(t, [t, 'mekanism:dust_lead']),
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 1000)]),
    event.recipes.create.pressing(t, t), // Press
  ]).transitionalItem(t).loops(5)
})
//mekanism:nugget_lead