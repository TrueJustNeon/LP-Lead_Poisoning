let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KS('incomplete_steel_mechanism')
 event.recipes.createSequencedAssembly([
    'kubejs:steel_mechanism',
  ], CR('precision_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create_tank_defenses:steel_sheet'])
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.createDeploying(t, [t, 'create:electron_tube']),
    event.recipes.createDeploying(t, [t, 'create_tank_defenses:steel_sheet'])
  ]).transitionalItem(t).loops(2)
  
})