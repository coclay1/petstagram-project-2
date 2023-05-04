const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//to-do create a comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            body: req.body.body,
            user_id: req.body.user_id,
        })
        res.status(200).json(newComment)
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.get('/', async (req,res) => {
    try{
        const newComment = await Comment.findAll()
        res.status(200).json(newComment) 
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;