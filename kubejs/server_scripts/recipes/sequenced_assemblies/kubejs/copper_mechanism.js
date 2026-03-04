let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)

ServerEvents.recipes(event => {
  const t = KJ('incomplete_copper_mechanism')
 event.recipes.createSequencedAssembly([
    Item.of('kubejs:copper_mechanism').WithChance(50), // Output
  ], KJ('andesite_mechanism'), [
    event.recipes.createDeploying(t, [t, 'kubejs:rubber']),
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']),
    event.recipes.createDeploying(t, [t, 'create:copper_sheet']),
    event.recipes.createDeploying(t, [t, 'kubejs:rubber']),
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'kubejs:hammer'])
  ]).transitionalItem(t).loops(1)
})