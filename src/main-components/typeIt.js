new TypeIt('#text', {
  speed: 50,
  loop: true,
})
  .type('if you ami at not', { delay: 500 })
  .move(-7, { delay: 300 })
  .delete(2, { pause: 200 })
  .type('im', { pause: 300 })
  .move(7, { delay: 200 })
  .type("hing, you'll htit it ")
  .move(-6)
  .delete(1)
  .move(null, { to: 'end' })
  .type('<em>every time.</em>')
  .move(null, { speed: 30, to: 'start', instant: true })
  .move(1, { delay: 400 })
  .delete(1, { delay: 400 })
  .type('I', { delay: 500 })
  .move(null, { delay: 200, to: 'end', instant: true })
  .type(' - <em>Zig Ziglar</em>')
  .go();
