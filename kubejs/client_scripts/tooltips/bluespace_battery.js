ItemEvents.modify(event => {
  event.modify('kubejs:bluespace_battery', item => {

    // Show the bar
    item.barVisible = stack => true

    // Bar width (0 → 13)
    item.barWidth = stack => {
      let energy = stack.nbt?.energy || 0
      let max = 500000
      return Math.floor((energy / max) * 13)
    }

    // Bar color (dynamic)
    item.barColor = stack => {
      let energy = stack.nbt?.energy || 0
      let max = 500000
      let percent = energy / max

      if (percent >= 0.8) return 0x00ffff // cyan
      if (percent >= 0.4) return 0x00ff00 // green
      if (percent >= 0.15) return 0xffff00 // yellow
      return 0xff0000 // red
    }

  })
})