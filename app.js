const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})


const db = mongoose.connection
db.on('open', () => console.log('connection established'))
db.on('error', (error) => console.log(err))


app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log("Port 3000"))
