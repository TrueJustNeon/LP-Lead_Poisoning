let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('incomplete_tunsgten_mechanism') // Transitional
 event.recipes.createSequencedAssembly([
    'kubejs:tungsten_mechanism', // Output
  ], KJ('electromagnetic_mechanism'), [ // Base
    event.recipes.createDeploying(t, [t, 'mekanism:osmium_ingot']), // Item 1
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'mekanism:osmium_ingot']), // Item 2
    event.recipes.createDeploying(t, [t, 'mekanism:osmium_ingot']), // Item 3
    event.recipes.create.pressing(t, t) // Press
  ]).transitionalItem(t).loops(5) // How many times
  
})