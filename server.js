const express = require('express')

const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bloggy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const articleRouter = require('./routes/api')

app.set('view engine','ejs')

app.use('/api', articleRouter)

app.listen(5000)
