const express = require('express')

const addPotabosCommand = require('../common/biz/add-potabo-command')
const repository = require('../common/inf/potabos-repo')

const router = express.Router()

router.get('/potabos', (req, res) => {
  repository.getAllPotabos()
    .then(potabos => {
      res.send(potabos)
    })
    .catch(e => {
      res.status(500).send('holy crap it died')
    })
})

router.post('/potabos', (req, res) => {
  if (!(req.body instanceof Array)) {
    res.status(400).send('thems not potabos!')
    return
  }

  addPotabosCommand(req.body)
  res.status(200).send('potabos added')
})

module.exports = router
