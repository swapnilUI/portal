const User = require('../models/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports.getUserById = function(id,cb){
  User.findById(id,cb);
}

 function getUserByEmail (username,cb){
  User.findOne({username:username},cb);
}

function createUser(newUser,cb){
  bcrypt.genSalt(10, function(err, salt){
    console.log("password",newUser.password);
    bcrypt.hash(newUser.password, salt, function(err, hash){
      if (err) throw err;
      newUser.password = hash
      newUser.save(cb);
    })
  })
}

function comparePassword(userPassword,hash,cb){
  bcrypt.compare(userPassword,hash, function(err,isMatch){
    if(err) throw err;
    cb(null, isMatch);
  })
}

module.exports.signup = function(req, res){
    const newUser = new User({
      name:req.body.name,
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
    })

    createUser(newUser,function(err,user){
      if(err){
        res.json({"success":false,"message":"User is not registered."})
      }else{
        res.json({"success":true,"message":"User is registered."});
      }
    })
}

module.exports.login = function (req,res){

  const username = req.body.username;
  const password = req.body.password;

    getUserByEmail(username,function(err,user){

      if (err) throw err
      if(!user){
        return res.json({"success":false,"message":"User not found!"})
      }
      comparePassword(password,user.password,function(err, isMatch){
          if(err) throw err;
          console.log(user);
          if(isMatch){
            const token = jwt.sign(user.toJSON(), config.secret, {expiresIn:6000000});
              res.json({ success:true, token:"Bearer "+token, user:{
                  id:user._id,
                  email:user.email,
                  name:user.name
                }
              })
          }else{
            res.json({"success":false,"message":"Wrong password!"})
          }
      })
    })
}
