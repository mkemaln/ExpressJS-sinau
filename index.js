const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/new', (req, res) => {
  res.send('I love Mushoku!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})