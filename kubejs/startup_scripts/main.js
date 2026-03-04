Platform.mods.kubejs.name = 'Lead Poisoning'
// Custom KubeJS creative tabs

StartupEvents.registry('creative_mode_tab', event => {
	event.create('custom_mechanisms').icon(() => 'kubejs:hdpe_mechanism').content(() => [
	// Mechanisms
		'kubejs:wooden_mechanism',
		'kubejs:flint_mechanism',
		'kubejs:andesite_mechanism',
		'kubejs:copper_mechanism',
		'create:precision_mechanism',
		'kubejs:steel_mechanism',
		'kubejs:hdpe_mechanism',
		'kubejs:electromagnetic_mechanism',
		'kubejs:tungsten_mechanism',
	// Incomplete
	    'kubejs:incomplete_wooden_mechanism',
		'kubejs:incomplete_flint_mechanism',
		'kubejs:incomplete_andesite_mechanism',
		'create:incomplete_copper_mechanism',
		'create:incomplete_precision_mechanism',
		'kubejs:incomplete_steel_mechanism',
		'kubejs:incomplete_hdpe_mechanism',
		'kubejs:incomplete_electromagnetic_mechanism',
		'kubejs:incomplete_tungsten_mechanism'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('custom_tools').icon(() => 'kubejs:screwdriver').content(() => [
		'kubejs:screwdriver',
		'kubejs:hammer'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('custom_batteries').icon(() => 'kubejs:bluespace_battery').content(() => [
		'kubejs:bluespace_battery'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('custom_items').icon(() => 'kubejs:rubber').content(() => [
		'kubejs:rubber',
		'kubejs:resin',
		'kubejs:sap',
		'kubejs:pure_dust_lead',
		'create:brass_hand',
		'kubejs:nether_scrap',
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('assembly_misc').icon(() => 'kubejs:lead_scrapmetal').content(() => [
		'kubejs:incomplete_chainmail_helmet',
		'kubejs:incomplete_chainmail_chestplate',
		'kubejs:incomplete_chainmail_leggings',
		'kubejs:incomplete_chainmail_boots',		
		'kubejs:nether_scrap',
		'kubejs:lead_scrapmetal'
	])
})

// Modify creative tabs

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.icon = 'kubejs:andesite_mechanism'; 
  event.displayName = Text.darkRed('KubeJS // All'); 
});

StartupEvents.modifyCreativeTab('kubejs:custom_mechanisms', event => {
  event.icon = 'kubejs:copper_mechanism'; 
  event.displayName = Text.darkRed('KubeJS // Mechanisms'); 
});

StartupEvents.modifyCreativeTab('kubejs:custom_tools', event => {
  event.icon = 'kubejs:hammer'; 
  event.displayName = Text.darkRed('KubeJS // Tools'); 
});

StartupEvents.modifyCreativeTab('kubejs:custom_batteries', event => {
  event.icon = 'kubejs:bluespace_battery'; 
  event.displayName = Text.darkRed('KubeJS // Batteries'); 
});

StartupEvents.modifyCreativeTab('kubejs:assembly_misc', event => {
  event.icon = 'kubejs:nether_scrap'; 
  event.displayName = Text.darkRed('KubeJS // Misc'); 
});

StartupEvents.modifyCreativeTab('kubejs:custom_items', event => {
  event.icon = 'kubejs:rubber'; 
  event.displayName = Text.darkGreen('KubeJS // Items'); 
});