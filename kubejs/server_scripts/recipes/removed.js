ServerEvents.recipes(event => {
 // Sequenced
	    event.remove({id: 'create:sequenced_assembly/precision_mechanism'})
 // Mixing
	 //   event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
	 //   event.remove({id: 'create:mixing/andesite_alloy'})
 // Crafting
// ## Create
	 //  event.remove({id: 'create:crafting/materials/andesite_alloy'}) // These are just in case ^^
	 //  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	    event.remove({id: 'create:crafting/kinetics/brass_hand'})
	    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	    event.remove({id: 'create:crafting/kinetics/belt_connector'})
	    event.remove({id: 'create:crafting/kinetics/deployer'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_press'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_saw'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_drill'})
	    event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
	    event.remove({id: 'create:crafting/kinetics/millstone'})
	    event.remove({id: 'create:crafting/kinetics/smart_chute'})
	//    event.remove({id: 'create:crafting/kinetics/steam_engine'}) // Fru's choice, have to ask
	    event.remove({id: 'create:crafting/logistics/andesite_funnel'})
	    event.remove({id: 'create:crafting/logistics/andesite_tunnel'})
	    event.remove({id: 'create:crafting/logistics/brass_tunnel'})
	    event.remove({id: 'create:crafting/logistics/brass_funnel'})
	 //   event.remove({id: 'create:crafting/materials/electron_tube'}) // For when we get liquid redstone (thermal i think lol)
// ## Muskets
	    event.remove({id: 'musketmod:musket'})
	    event.remove({id: 'musketmod:blunderbuss'})
	    event.remove({id: 'musketmod:cartridge'})
	    event.remove({id: 'musketmod:pistol'})
// ## Minecraft
		event.remove({ id: 'minecraft:crossbow' })
	// Smelting
		//	event.remove({id: 'mekanism:processing/lead/dirty_dust/from_clump'})
	// Cooking
	// Sequenced
		    event.remove({id: 'tfmg:sequenced_assembly/steel_mechanism'})
	// Campfire
	// Blasting
	// Pressing
})

