const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email!',
        ],
    },
    thoughts: [{
        type: Schema.Types.ObjectId ,
        ref: 'thoughts',
        },
    ],
    friends: [ {
        type: Schema.Types.ObjectId,
        ref: 'user',
        },
    ],
  },
   // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//create a virtual property 'friendCount' retrieve friend length
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const user = model('user', userSchema);
module.exports = user;