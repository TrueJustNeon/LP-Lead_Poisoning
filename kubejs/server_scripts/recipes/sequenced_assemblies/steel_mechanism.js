let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

onEvent('recipes', event => {
  t = KS('incomplete_steel_mechanism')
 event.recipes.createSequencedAssembly([
    'kubejs:steel_mechanism',
  ], CR('precision_mechanism'), [
    event.recipes.createDeploying(t, [t, 'mekanism:steel_plate'])
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'mekanism:steel_plate'])
  ]).transitionalItem(t).loops(1)
  
})