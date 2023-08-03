const express = require('express')
const router = express.Router()
const articlesModel = require('../models/articles');



router.get('/', async (req, res) => {

    const articles = await articlesModel.find();
    
    res.json(articles)

    // const abdi = [{
                // title: 'Test Article',
                // timeCreated: new Date(),
                // description: 'Test Description'
            // }]

    // res.render('articles/index', {articles})
})


router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.post('/', async (req, res) => {
    const articles = new articlesModel({
        title: req.body.title,
        description: req.body.description,
        post: req.body.post,
})
   try {
      await articles.save()
      res.json(articles)

    //    res.redirect(`/articles/${newArticle.id}`)
    } catch (e) {
        // res.render('/articles/index', {newArticle})
}
})

module.exports = router;