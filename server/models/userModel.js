const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:String,
  username:{
      type:String,
      required:true,
      unique:true
  },
  password:{
      type:String,
      required:true
  },
  email:{
      type:String,
      unique:true,
      required:true
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
