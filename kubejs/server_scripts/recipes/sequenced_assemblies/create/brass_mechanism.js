let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  const t = CR('incomplete_precision_mechanism')
 event.recipes.createSequencedAssembly(
 // Outputs:
      [
        Item.of('create:precision_mechanism').withChance(130), // Main output, will appear in JEI as the result
        Item.of('kubejs:andesite_mechanism').withChance(8), // Rest of these items will be considered Random Salvage
        Item.of('create:andesite_alloy').withChance(8),
        Item.of('create:cogwheel').withChance(5),
        Item.of('create:shaft').withChance(2),
        Item.of('create:crushed_gold_ore').withChance(2),
        Item.of('2x minecraft:gold_nugget').withChance(2),
        'minecraft:iron_ingot',
        'minecraft:clock'
		], KJ('andesite_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'create:brass_sheet'])
  ]).transitionalItem(t).loops(1)
})