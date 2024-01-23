const { Schema, Types } = require('mongoose');
// const dateFormat = require('../../utils/');

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
    // get: timestamp => dateFormat(timestamp)
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