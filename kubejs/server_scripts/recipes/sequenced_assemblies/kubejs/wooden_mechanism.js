let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)

ServerEvents.recipes(event => {
  t = KJ('incomplete_wooden_mechanism')
 event.recipes.createSequencedAssembly([
    'kubejs:wooden_mechanism', // Output
  ], MC('spruce_slab'), [
    event.recipes.createDeploying(t, [t, 'minecraft:iron_ingot']),
    event.recipes.createDeploying(t, [t, 'minecraft:string']),
    event.recipes.createDeploying(t, [t, 'minecraft:string']),
	event.recipes.create.cutting(t, t)
  ]).transitionalItem(t).loops(2)
})