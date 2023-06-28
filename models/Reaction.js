const { Schema, Types } = require('mongoose');
const { dateFunction } = require('../utils/helpers/dateFunction');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (data) => dateFunction(data),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// just exports the schema, not the model
module.exports = reactionSchema;