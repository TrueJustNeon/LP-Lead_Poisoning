// For items.
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create:belt_connector', 1), // arg 1: output
  [
    '   ',
    'RRR', // arg 2: the shape (array of strings)
    'RRR'
  ],
  {
    R: 'kubejs:rubber'
  }
)
})
