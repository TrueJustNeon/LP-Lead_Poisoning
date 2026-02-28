let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('nether_scrap')
 event.recipes.createSequencedAssembly([
  // Outputs:
      [
        Item.of('kubejs:netherite_nugget').withChance(4), // Main output, will appear in JEI as the result
        Item.of('minecraft:netherrack').withChance(10), // Rest of these items will be considered Random Salvage
        Item.of('minecraft:nether_brick').withChance(5),
        Item.of('minecraft:gold_nugget').withChance(5)
      ],
  ], MC('netherrack'), [ // Base
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)]),
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)]),
    event.recipes.create.pressing(t, t), // Press
    event.recipes.create.pressing(t, t), // Press
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)])
  ]).transitionalItem(t).loops(5)
})