const router = require ('express').Router();
const { Comment } = require('../../models');


// add comment (not sure if this is correct????)
router.post('/blogs/:blogId/comment', (req, res) => {

    const comment = new Comment (req.body);
    comment
    .save()
    .then(()=> ContinueStory.findById(req.params.blogId))
    .then(()=> res.redirect('/'))
    .catch((err)=>{
        console.log(err);
    });

});

module.exports=router;