const router=require('express').Router();

let Article = require('../models/article.model');

router.route('/').get((req,res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Erorr:'+err));

});

router.route('/newArticle').post((req, res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    const date = Date.parse(req.body.date);

    const newArticle=new Article({title, author, content, date});

    newArticle.save()
        .then(()=>res.json('New post has beeen added!'))
        .catch(err => res.status(400).json('Erorr'+err));

});



router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(() => res.json('Post Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
        .then(articles => {
            articles.title = req.body.title;
            articles.author = req.body.author;
            articles.content = req.body.content;
            articles.date = Date.parse(req.body.date);

            articles.save()
                .then(() => res.json("Post Updated!"))
                .catch(err => res.status(400).json('Error: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;