interface Potabo {
  id: number,
  potabo: string,
  uri: string
}

export function getAllPotabos() : Array<Potabo> {
  return [
    { id: 1, potabo: 'peesah peezah', uri: 'http://www.potabo.com/pics/peesah.jpg' },
    { id: 2, potabo: 'terp', uri: 'http://www.potabo.com/pics/1286335065187.png' },
    { id: 3, potabo: 'hat dug', uri: 'http://www.potabo.com/pics/hatdug.jpg' }
  ]
}
