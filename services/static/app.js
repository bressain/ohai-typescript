import express from 'express'
import path from 'path'

const app = express()

app.set('views', path.join('static', 'views'))
app.set('view engine', 'pug')

app.use('/assets', express.static(path.join('static', 'public')))

app.get('/', (req, res) => {
  res.render('index')
})

export default app
