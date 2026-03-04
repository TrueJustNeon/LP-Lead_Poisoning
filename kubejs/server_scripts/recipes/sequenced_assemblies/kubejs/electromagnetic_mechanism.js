let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_electromagnetic_mechanism') // Transitional
 event.recipes.createSequencedAssembly(
 // Outputs:
      [
        Item.of('kubejs:electromagnetic_mechanism').withChance(130), // Main output, will appear in JEI as the result
        Item.of('create:precision_mechanism').withChance(8), // Rest of these items will be considered Random Salvage
        Item.of('create:andesite_alloy').withChance(8),
        Item.of('create:cogwheel').withChance(5),
        Item.of('create:shaft').withChance(2),
        Item.of('create:crushed_gold_ore').withChance(2),
        Item.of('2x minecraft:gold_nugget').withChance(2),
        'minecraft:iron_ingot',
        'minecraft:clock'
		], KJ('hdpe_mechanism'), [ // Base
    event.recipes.createDeploying(t, [t, 'tfmg:electromagnetic_coil']), // Item 1
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']), // Item 2
    event.recipes.createDeploying(t, [t, 'tfmg:electromagnetic_coil']), // Item 3
    event.recipes.create.pressing(t, t) // Press
  ]).transitionalItem(t).loops(3) // How many times
  
})