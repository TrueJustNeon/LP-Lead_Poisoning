PowerfulJS.events.itemCapabilities(event => {
  event.add('kubejs:bluespace_battery', {
    energy: {
      capacity: 500000,   // big battery
      maxReceive: 5000,   // fast charging
      maxExtract: 2000    // allow output (or 0 if charge-only)
    }
  })
})