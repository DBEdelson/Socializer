const { Schema, model } = require('mongoose');
const moment = require('moment');

// reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId ,
            default: () => new Types.ObjectId (), 
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use getter method to format the timestamp on query
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
    toJSON: {
        getters: true,
    },
    id: false,
    }
);

// Schema to create thoughts model
const thoughtSchema = new Schema(
    {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        //default value to current timestamp
        default: Date.now,
        //getter method to format timestamp on query
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
    },
    {     
    toJSON: {
       getters: true,
    },
    id: false,
    },
);

//create a virtual property 'reaction' retrieve reaction length
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const thoughts = model('thoughts', thoughtSchema);
module.exports = thoughts;