const router = require('express').Router();
const {
  getThoughts, 
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-Controller');

//api/thoughts
router.route('/').get(getThoughts).post(createThought);

//api/thoughts/:thoughtId
router.route('/:ThoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtsId/reactionId
router.route('/:thoughtId/reactions/reactionId'),delete(removeReaction);



module.exports = router;
