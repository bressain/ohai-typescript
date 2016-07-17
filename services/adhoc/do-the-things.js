const repository = require('../common/inf/potabos-repo')

console.log('preparing to process all the potabos...')

repository.getAllPotabos().forEach(x => {
  console.log(`processing potabo: ${x.id}`)
})

console.log('done processing potabos')