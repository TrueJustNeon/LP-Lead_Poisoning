// Items like, screwdrivers, with durability

onEvent('item.registry.tool_tiers', event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })
});

onEvent('item.registry', (event) => {
    let tool = (name,rarity) => {
        let id = name.toLowerCase()
        event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)
    }
tool('Screwdriver')
tool('Hammer'

}