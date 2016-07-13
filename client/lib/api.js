import axios from 'axios'

export function getPotabos (cb) {
  axios.get('http://localhost:4000/potabos')
    .then(res => cb(res.data))
    .catch(console.log)
}