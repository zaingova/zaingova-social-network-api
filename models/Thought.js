const { Schema, Types, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { dateFunction } = require('../utils/helpers/dateFunction');

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
      required: true,
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

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })


const Thought = model('thought', thoughtSchema);
module.exports = Thought;