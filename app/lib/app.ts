import * as express from 'express'
import * as path from 'path'

const app = express()

app.set('views', path.join('lib', 'views'))
app.set('view engine', 'pug')

app.use('/assets', express.static(path.join('lib', 'public')))

app.get('/', (req: express.Request, res: express.Response) => {
  res.render('index')
})

export default app
