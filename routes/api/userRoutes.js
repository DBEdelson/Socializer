const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user');

// api/users GET POST
router.route('/').get(getUsers).post(createUser);

// api/users/:userId GET, PUT, DELETE
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// api/users/:userId/friends/:friendId POST, DELETE by ID
router 
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;