const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// const dateformat = require('utils/dateformat');

const thoughtSchema = new Schema(
{
  thoughtText: {
  type: String,
   required: true,
   minlenght: 1,
   maxlenght: 280
   },
   createAt: {
    type: Date,
    default: Date.now,
    // get: timestamp => dateFormat(timestamp)
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

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);


module.exports = Thought;