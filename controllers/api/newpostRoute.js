const router = require('express').Router();
const { NewPost } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/newpost', async (req, res) => {
    try {
        const newPost = await NewPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
        
   } catch (err) {
      res.status(400).json(err)
  }

});

router.delete('/:NewPostId', (req, res) => {
    try {
        const postData = Post.destroy({
            where: {
                id: req.parasm.id,
                user_id: req.session.user_id,
            },
        });

        if(!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router