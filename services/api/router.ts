import * as express from 'express'

import * as repository from '../common/inf/potabos-repo'

const router = express.Router()

router.get('/potabos', async (req: express.Request, res: express.Response) => {
  try {
    const potabos = await repository.getAllPotabos()
    res.send(potabos)
  } catch (e) {
    res.status(500).send('holy crap it died')
  }
})

export default router
