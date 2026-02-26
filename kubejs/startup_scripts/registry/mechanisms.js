onEvent('item.registry', (event) => {

    let mechanism = (name, rarity) => {
        let id = name.toLowerCase()
        event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + ' Mechanism').rarity(RARITY_COMMON)
        event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('Incomplete ' + name + ' Mechanism')

    }

mechanism('Wooden')
mechanism('Flint')
mechanism('Andesite')
mechanism('Brass')
mechanism('Steel')
mechanism('HDPE')
mechanism('Tungsten')
}