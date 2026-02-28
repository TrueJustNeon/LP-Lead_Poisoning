let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('incomplete_andesite_mechanism')
 event.recipes.createSequencedAssembly([
    'kubejs:andesite_mechanism', // Output
  ], KJ('wooden_mechanism'), [
    event.recipes.createDeploying(t, [t, 'create:andesite_alloy']),
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.create.pressing(t, t), // Press
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'create:andesite_alloy'])
  ]).transitionalItem(t).loops(2)
})