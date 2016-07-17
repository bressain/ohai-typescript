import * as repository from '../inf/potabos-repo'

export default function addAllThePotabos (potabos) {
  console.log('adding potabos...')
  potabos.forEach(x => {
    repository.addPotabo(x)
  })
  console.log('all potabos added')
}
