const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(createReaction);

// /api/thoughts/:thoughtId/reaction/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;