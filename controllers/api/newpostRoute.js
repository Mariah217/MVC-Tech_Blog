const router = require('express').Router();
const { NewPost } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const newStory = await NewPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newStory);
        
   } catch (err) {
      res.status(400).json(err)
  }

});

// delete story with story id

router.delete('/:NewStoryId', (req, res) => {
    try {
        const storyData = Story.destroy({
            where: {
                id: req.parasm.id,
                user_id: req.session.user_id,
            },
        });

        if(!storyData) {
            res.status(404).json({ message: 'No story found with this id!' });
            return;
        }
        res.status(200).json(storyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router