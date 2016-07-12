import * as express from 'express'

import * as repository from './repository'

const router = express.Router()

router.get('/potabos', (req: express.Request, res: express.Response) => {
  const potabos = repository.getAllPotabos()
  res.send(potabos)
})

export default router
