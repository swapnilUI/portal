const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discussionsSchema = new Schema({
  heading : String,
  description: String,
  author: String,
  category:String,
  created_at: {type:Date, default: Date.now},
  comments:[{
        comment:String,
        posted_by:String,
        posted_at: {type:Date, default: Date.now},
  }]
});
const Discussion = mongoose.model('Discussion', discussionsSchema);

module.exports = Discussion;
