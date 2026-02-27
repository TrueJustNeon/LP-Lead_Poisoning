let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('nether_scrap')
 event.recipes.createSequencedAssembly([
  // Outputs:
      [
        CreateItem.of('kubejs:netherite_nugget', 0.0005), // Main output, will appear in JEI as the result
        CreateItem.of('minecraft:netherrack', 0.008), // Rest of these items will be considered Random Salvage
        CreateItem.of('minecraft:nether_brick', 0.008),
        CreateItem.of('2x minecraft:gold_nugget', 0.002)
      ],
  ], MC('netherrack'), [ // Base
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)]),
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)]),
    event.recipes.create.pressing(t, t), // Press
    event.recipes.create.pressing(t, t), // Press
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 100)])
  ]).transitionalItem(t).loops(10)
})