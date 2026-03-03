StartupEvents.registry('item', event => {
	// Main Items
    event.create('rubber').displayName('Rubber')
    event.create('resin').displayName('Resin')
    event.create('sap').displayName('Sap')
    event.create('netherite_nugget').displayName('Netherite Nugget')
	// Extra not to mention stuff, only needed for assembly
    event.create('nether_scrap', 'create:sequenced_assembly').displayName('Nether Scrap')
    event.create('incomplete_chainmail_helmet', 'create:sequenced_assembly').displayName('Incomplete Chainmail Helmet')
    event.create('incomplete_chainmail_chestplate', 'create:sequenced_assembly').displayName('Incomplete Chainmail Chestplate')
    event.create('incomplete_chainmail_leggings', 'create:sequenced_assembly').displayName('Incomplete Chainmail Leggings')
    event.create('incomplete_chainmail_boots', 'create:sequenced_assembly').displayName('Incomplete Chainmail Boots')
	// Battery
	event.create('bluespace_battery').displayName('Bluespace Battery').glow(true).tooltip('Experimental').modelJson({parent: 'kubejs:item/bluespace_battery'}).texture('0', 'kubejs:item/bluespace_battery')
})