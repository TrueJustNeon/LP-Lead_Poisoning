onEvent('recipes', event => {
	// Sequenced
	    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
	// Mixing
	 //   event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	 //   event.remove({id: 'create:mixing/andesite_alloy'})
	// Crafting
	 //   event.remove({id: 'create:crafting/materials/andesite_alloy'})
	 //  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	    event.remove({id: 'create:crafting/kinetics/brass_hand'})
	// Smelting
	// Cooking
	// Campfire
	// Blasting
	// Pressing
})