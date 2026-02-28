let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let KJ = (id, x) => MOD("kubejs", id, x)
let CR = (id, x) => MOD("create", id, x)

ServerEvents.recipes(event => {
  t = KJ('incomplete_electromagnetic_mechanism') // Transitional
 event.recipes.createSequencedAssembly([
    'kubejs:electromagnetic_mechanism', // Output
  ], KJ('hdpe_mechanism'), [ // Base
    event.recipes.createDeploying(t, [t, 'tfmg:electromagnetic_coil']), // Item 1
    event.recipes.createDeploying(t, [t, 'kubejs:screwdriver']), // Item 2
    event.recipes.createDeploying(t, [t, 'tfmg:electromagnetic_coil']), // Item 3
    event.recipes.create.pressing(t, t) // Press
  ]).transitionalItem(t).loops(3) // How many times
  
})