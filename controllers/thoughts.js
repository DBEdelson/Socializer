const { thoughts, user } = require('../models');

module.exports = {
    //get all thoughts
    getThought(req, res) {
        thoughts.find({})
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    //get a thought
    getSingleThought(req,res) {
        thoughts.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
            !thought
            ? res.status(404).json({message:'No thought with that id'})
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    //create thought and assign to user 
    createThought(req, res) {
        thoughts.create(req.body)
            .then((thought) => { 
                return user.findOneAndUpdate (
                    { _id: req.body.userId },
                    { $push: { thought: thought._id }}, 
                    { new: true }
                );
            })
            .then((user) => 
                !user 
                ? res.status(404).json({message: 'Thought created but no user with that id!'})
                : res.json('Thought successfully created!') 
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //update thought 
    updateThought(req, res) {
        thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId }, 
            { $set: req.body }, 
            { runValidators: true, new: true })
        .then((thought) =>
            !thought
            ? res.status(404).json({message: 'No thought with this id!'})
            : res.json(thought)
        )
        .catch((err) => { 
            console.log(err);
            res.status(500).json(err);
        });
    },

    //delete thought 
    deleteThought(req, res) {
       thoughts.findOneAndDelete({ _id: req.params.thoughtId })
       .then((thought) =>
            !thought
            ? res.status(404).json({message:'No thought with that id'})
            : user.findOneAndUpdate(
                { thought: req.params.thoughtId },
                { $pull: { thought: req.params.thoughtId } },
                { new: true }
              )
        )
        .then((user) =>
          !user
            ? res.status(404).json({
                message: 'Thought deleted but no user with this id!',
              })
            : res.json({ message: 'Thought successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },

    //create reaction
    createReaction(req, res) {
        thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        //{ runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    
    // delete reaction
   deleteReaction(req, res) {
        thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
};
//reference mini-project controller