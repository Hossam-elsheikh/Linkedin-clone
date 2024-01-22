const mongoose = require('mongoose')
const { Schema } = mongoose
const reactionSchema = require('./Reaction')

const postSchema = mongoose.Schema({

    created:{
        type:Date,
        default:Date.now
    }
    ,
    publisherId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    postContent: {
        text: {
            type: String,
            minLength: 1,
            required: true,
        },
        photo: [{
            url: {
                type: String,
                // required: true
            },
            description: {
                type: String
            }
        }]
    },
    reactions: [reactionSchema]
    ,
    comment: [
        {
            text: {
                type: String,
                minLength: 1,
            },
            created: {
                type: Date,
                default: Date.now
            },
            commenter: {
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            reactions: [reactionSchema]
        }
    ],
    repost: [{
        reposter: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        created: {
            type: Date,
            default: Date.now
        }
    }],

})

const postModel = mongoose.model("Post", postSchema)
module.exports = postModel