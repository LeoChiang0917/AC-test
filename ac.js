// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// routes setting
app.use(express.static('public'))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:page', (req, res) => {
    const keyword = req.params.page 
    res.render('show', {page: keyword})
  })
// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})