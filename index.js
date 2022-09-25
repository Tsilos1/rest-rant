require('dotenv').config()

const express = require('express')
const app=express()

//three routes are defined below using GET. Places, homepage and wildcard as shown below

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send ('Hello World!')
}
)

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
}
)

app.listen (process.env.PORT)

