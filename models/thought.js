const { Schema, Types } = require('mongoose');
const reactionSchema = require('../Reaction');
const dateFormat = require('utils/dateFormat');

const thoughtSchema = new Schema(
{
  thoughtText: {
  type: String,
   required: 'You need to leave a thought',
   minlenght: 1,
   maxlenght: 280
   },
   createAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
   },   
   username: {
    Type: String,
    required: true,
    },
    reactions: [reactionSchema]   
},
{
 toJSON: {
   getters: true
 },
   id: false
   }
);

thoughtSchemal.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;