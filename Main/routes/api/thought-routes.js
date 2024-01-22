const router = require('express').Router();
const {
  createThought,
  getThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

//api/users
router.route('/').get(getThought).post(createThought);

//api/users/:userId
router.route('/:ThoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//api/users/:userId/friends/:friendId
router.route('/:thoughtId/Reaction/:ReactionId').post(addReaction).delete(removeReaction);

module.exports = router;
