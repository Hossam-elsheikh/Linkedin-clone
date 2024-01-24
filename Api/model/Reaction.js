const mongoose = require('mongoose')
const { Schema } = mongoose

const reactionSchema = mongoose.Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reaction: {
        type: String,
        enum: ['like', 'funny', 'love', 'celebrate', 'insightful', 'support'],
        // required: true
    }

})

module.exports = reactionSchema