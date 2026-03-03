Platform.mods.kubejs.name = 'Lead Poisoning'
// Normal KubeJS Tab to all items
StartupEvents.modifyCreativeTab('kubejs:tab', event => {
  event.icon = 'kubejs:andesite_mechanism'; 
  event.displayName = Text.darkRed('KubeJS // All'); 
});

StartupEvents.registry('creative_mode_tab', event => {
	event.create('KubeJS // Mechanisms').icon(() => 'kubejs:hdpe_mechanism').content(() => [
	// Mechanisms
		'kubejs:wooden_mechanism',
		'kubejs:flint_mechanism',
		'kubejs:andesite_mechanism',
		'create:precision_mechanism',
		'kubejs:steel_mechanism',
		'kubejs:hdpe_mechanism',
		'kubejs:electromagnetic_mechanism',
		'kubejs:tungsten_mechanism',
	// Incomplete
	    'kubejs:incomplete_wooden_mechanism',
		'kubejs:incomplete_flint_mechanism',
		'kubejs:incomplete_andesite_mechanism',
		'create:incomplete_precision_mechanism',
		'kubejs:incomplete_steel_mechanism',
		'kubejs:incomplete_hdpe_mechanism',
		'kubejs:incomplete_electromagnetic_mechanism',
		'kubejs:incomplete_tungsten_mechanism'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('KubeJS // Tools').icon(() => 'kubejs:screwdriver').content(() => [
		'kubejs:screwdriver',
		'kubejs:hammer'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('KubeJS // Batteries').icon(() => 'kubejs:bluespace_battery').content(() => [
		'kubejs:bluespace_battery'
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('KubeJS // Items').icon(() => 'kubejs:rubber').content(() => [
		'kubejs:rubber',
		'kubejs:latex',
		'kubejs:sap',
		'create:brass_hand',
		'kubejs:nether_scrap',
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('KubeJS // Misc').icon(() => 'kubejs:rubber').content(() => [
		'kubejs:incomplete_chainmail_helmet',
		'kubejs:incomplete_chainmail_chestplate',
		'kubejs:incomplete_chainmail_leggings',
		'kubejs:incomplete_chainmail_boots',		
		'kubejs:nether_scrap'
	])
})