let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)

ServerEvents.recipes(event => {
 const t = KJ('incomplete_chainmail_helmet')
 event.recipes.createSequencedAssembly([
    Item.of('minecraft:chainmail_helmet'), // Output
  ], MC('leather_helmet'), [
    event.recipes.createDeploying(t, [t, 'create_tank_defenses:steel_sheet']), // Steel sheet
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 50)]), // Lava
    event.recipes.create.pressing(t, t), // Press
    event.recipes.createDeploying(t, [t, 'minecraft:chain']), // Chain
    event.recipes.createDeploying(t, [t, 'minecraft:chain']), // Chain
    event.recipes.create.filling(t, [t, Fluid.of('minecraft:lava', 50)]), // Lava
    event.recipes.create.pressing(t, t), // Press
  ]).transitionalItem(t).loops(5) // Loop x5
})