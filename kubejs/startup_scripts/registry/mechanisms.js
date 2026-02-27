StartupEvents.registry('item', event => {

    let mechanism = (name) => {
        let id = name.toLowerCase()
        event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism')
        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')

    }

mechanism('Wooden') // Tier 1
mechanism('Flint') // Tier 2
mechanism('Andesite') // Tier 3
// mechanism('Brass') // Tier 4
mechanism('Steel') // Tier 5
mechanism('HDPE') // Tier 6
mechanism('Electromagnetic') // Tier 7
mechanism('Tungsten') // Tier 8

})