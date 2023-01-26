const { thoughts, user } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res) {
        user.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //get single user
    getSingleUser(req, res) {
        user.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No user with this id!'})
            : res.json(user)
        )
        .catch ((err) => res.status(500).json(err));
    },

    //create new user
    createUser(req, res) {
        user.create(req.body)
        .then((user) => res.json(user))
        .catch((err) =>  {
            console.log(err);
            return res.status(500).json(err);
          });
    },

    // update user
    updateUser(req, res) {
        user.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body},
            { runValidators: true, new: true } 
        )
        .then((user) => 
            !user   
            ? res.status(404).json({message: 'No user with this id!'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    //delete user and thought
    deleteUser(req, res) {
        user.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
            !user  
            ? res.status(404).json({message: 'No user with this id!'})
            : thoughts.deleteMany({ _id: { $in: user.thoughts }})
        )
        .then(() => res.json({message: 'User and thought deleted!'}))
        .catch((err) => res.status(500).json(err));       
    },

//add a friend
addFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete a friend
  deleteFriend(req, res) {
    user.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(
        (user) =>
          !user
            ? res.status(404).json({ message: "No user with this ID!" })
            : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};


