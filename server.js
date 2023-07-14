const express = require('express')

const articleRouter = require('./routes/articles')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bloggy')

const app = express()

app.set('view engine','ejs')

app.use('/articles', articleRouter)


app.get('/', (req, res) => { 
    const article = [{
        title: 'Test Article',
        timeCreated: new Date(),
        description: 'Test Description'
    }]
    res.render("articles/index.ejs", {articles: article})
})

app.listen(5000)