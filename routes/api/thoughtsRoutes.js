const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought, 
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughts');

// api/thoughts
router.route('/').get(getThought).post(createThought);

// api/thoughts/:thoughtId GET, PUT, DELETE
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thoughts/:thoughtId/reactions post
router.route('/:thoughtId/reactions')
    .post(createReaction);

// api/thoughts/:thoughtId/reactions/:reactionId delete
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;