const { Schema, Types } = require('mongoose');
// const dateformat = require('../../utils/');

const reactionSchema = new Schema(
{
 reactionId: {
  type: Schema.Types.ObjectId,
  default: () => new Types.ObjectId()
 },
   reactionBody: {
   type: String,
   required: true,
   maxlenght: 280
   },
   username: {
    Type: String,
    required: true,
    },
   createAt: {
    type: Date,
    default: Date.now,
    // get: timestamp => dateformat(timestamp)
   }   
},
{
 toJSON: {
   getters: true
 },
   id: false
   }
);

module.exports = reactionSchema;