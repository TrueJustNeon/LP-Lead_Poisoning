let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('incomplete_hdpe_mechanism')
 event.recipes.createSequencedAssembly([
    'kubejs:hdpe_mechanism', // Output
  ], CR('precision_mechanism'), [ // Base
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.createDeploying(t, [t, 'mekanism:hdpe_sheet']),
    event.recipes.createDeploying(t, [t, 'mekanism:hdpe_sheet']),
	event.recipes.create.pressing(t, t) // Press
  ]).transitionalItem(t).loops(2)
  
})