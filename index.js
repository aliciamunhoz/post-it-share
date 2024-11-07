const express = require('express')
const routes = require('./src/server/routes/messageRoutes')

const app = express()

app.use(express.static('src/public'))
app.use(express.urlencoded({ extended: true }))

const port = 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})

app.use('/', routes)