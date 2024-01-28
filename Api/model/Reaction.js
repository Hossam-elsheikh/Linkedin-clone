const mongoose = require('mongoose')
const { Schema } = mongoose

const reactionSchema = mongoose.Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reaction: {
        type: String,
        enum: ['like', 'clap', 'support', 'love', 'insightful', 'inquire'],
    },

},{
    timestamps:true
})

module.exports = reactionSchema