ItemEvents.toolTierRegistry(event => {
    event.add('tool', tier => {
        tier.uses = 250
        tier.repairIngredient = '#forge:ingots/iron'
    })
});

StartupEvents.registry('item', event => {
    let tool = (name,rarity) => {
        let id = name.toLowerCase()
        event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)
    }
tool('Screwdriver')
tool('Hammer')

})
