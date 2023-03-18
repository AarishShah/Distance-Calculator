const express = require('express')
const usersRouter = require('./src')
const path = require('path')

const app = express()
app.use(express.static('public'))
app.use(usersRouter)

const viewsPath = path.join(__dirname, './templates/views')
app.set('views', viewsPath)
app.set('view engine', 'hbs')

app.listen(process.env.PORT || 3000, () => {
    console.log('server is up on port 3000')
})