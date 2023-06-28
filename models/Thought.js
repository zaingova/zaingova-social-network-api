const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');
const { dateFunction } = require('../utils/dateFunction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (data) => dateFunction(data),
    },
    username: {
      type: String,
      required: tru,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

const Thought = model('thought', thoughtSchema);
module.exports = Thought;