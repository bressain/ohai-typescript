import express from 'express'

import addPotabosCommand from '../common/biz/add-potabo-command'
import * as repository from '../common/inf/potabos-repo'

const router = express.Router()

router.get('/potabos', async (req, res) => {
  try {
    const potabos = await repository.getAllPotabos()
    res.send(potabos)
  } catch (e) {
    res.status(500).send('holy crap it died')
  }
})

router.post('/potabos', (req, res) => {
  if (!(req.body instanceof Array)) {
    res.status(400).send('thems not potabos!')
    return
  }

  addPotabosCommand(req.body)
  res.status(200).send('potabos added')
})

export default router
