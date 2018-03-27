const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var discussionsSchema = new Schema({
  heading : String,
  description: String,
  author: String,
  created_at: {type:Date, default: Date.now},
  comments:[{
        comment:String,
        posted_by:String,
        posted_at: {type:Date, default: Date.now},
  }]

});
var Discussion = mongoose.model('Discussion', discussionsSchema);

module.exports = Discussion;
