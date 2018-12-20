const Post = require('../models/Post')
const router = require('express').Router()


//GET
router.get('/', (req, res, next)=>{
  Post.find()
    .then(posts=>{
      res.status(200).json(posts)
    }).catch(e=>{
      res.status(400).json(e)
    })
})

//POST

router.post('/', (req, res, next)=>{
  Post.create(req.body)
    .then(post=>{
      res.status(201).json(post)
    }).catch(e=>{
      res.status(400).json(e)
    })
})

module.exports = router