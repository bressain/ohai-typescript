export function getAllPotabos () {
  return new Promise(resolve => {
    resolve([
      { id: 1, potabo: 'peesah peezah', uri: 'http://www.potabo.com/pics/peesah.jpg' },
      { id: 2, potabo: 'terp', uri: 'http://www.potabo.com/pics/1286335065187.png' },
      { id: 3, potabo: 'hat dug', uri: 'http://www.potabo.com/pics/hatdug.jpg' }
    ])
  })
}

export function addPotabo (potabo) {
  console.log(`I dun added a potabo called ${potabo.potabo}`)
}
