const repository = require('../inf/potabos-repo')

module.exports.addAllThePotabos = potabos => {
  console.log('adding potabos...')
  potabos.forEach(x => {
    repository.addPotabo(x)
  })
  console.log('all potabos added')
}
