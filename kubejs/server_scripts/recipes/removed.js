ServerEvents.recipes(event => {
	// Sequenced
	    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
	// Mixing
	 //   event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	 //   event.remove({id: 'create:mixing/andesite_alloy'})
	// Crafting
	 //  event.remove({id: 'create:crafting/materials/andesite_alloy'}) // These are just in case ^^
	 //  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	    event.remove({id: 'create:crafting/kinetics/brass_hand'})
	    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	    event.remove({id: 'create:crafting/kinetics/belt_connector'})
	    event.remove({id: 'create:crafting/kinetics/deployer'})
	    event.remove({id: 'musketmod:musket'})
	    event.remove({id: 'musketmod:blunderbuss'})
	    event.remove({id: 'musketmod:cartridge'})
	    event.remove({id: 'musketmod:pistol'})
		event.remove({ id: 'minecraft:crossbow' })
	// Smelting
	// Cooking
	// Campfire
	// Blasting
	// Pressing
})