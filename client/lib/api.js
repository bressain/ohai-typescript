import axios from 'axios'

export function getPotabos (cb) {
  // axios.get('http://localhost:4000/potabos')
  //   .then(res => cb(res.data))
  //   .catch(console.log)

  // Let's pretend that CORS isn't a thing
  cb([
    { id: 1, potabo: 'peesah peezah', uri: 'http://www.potabo.com/pics/peesah.jpg' },
    { id: 2, potabo: 'terp', uri: 'http://www.potabo.com/pics/1286335065187.png' },
    { id: 3, potabo: 'hat dug', uri: 'http://www.potabo.com/pics/hatdug.jpg' }
  ])
}