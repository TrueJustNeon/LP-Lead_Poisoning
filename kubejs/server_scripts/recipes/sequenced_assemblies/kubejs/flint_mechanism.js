let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_flint_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:flint_mechanism'), // Output
  ], KJ('wooden_mechanism'), [
    event.recipes.createDeploying(t, [t, 'minecraft:iron_nugget']),
    event.recipes.createDeploying(t, [t, 'minecraft:flint']),
    event.recipes.createDeploying(t, [t, 'minecraft:flint']),
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver'])
  ]).transitionalItem(t).loops(2)
})