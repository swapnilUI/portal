
const Discussion = require('../models/discussionsModel');

function getDiscussions(req,res){
    Discussion.find({},function(err,data){
      if (err) console.log ("error", err);
        res.json(data);
    });
}
function startDiscussion(req,res){
  const newDiscussion = new Discussion({
    heading : req.body.heading,
    description: req.body.description,
    author: req.body.author
  });
  newDiscussion.save(function(err){
    if(err){
     return res.send(err);
    }
     return res.json({success:true});
  })
}
function postComment(req,res){
  Discussion.findByIdAndUpdate(
    req.body.params.id,
    {$push:{"comments":req.body}},
    {safe: true, upsert: false},
      function(err, model) {
        if(err){
         return res.send(err);
        }
         return res.json({success:true});
     });
}
function removeComment(req,res){
  Discussion.update(
    {"_id":req.body.params.id},
    {$pull:{"comments":{"_id":req.body.params.commentId}}},
    function(err,model){
      if(err){
        console.log("errorr", err);
        return res.send(err);
      }else{
        return res.json({success:true})
      }
    }
  )
}
module.exports = {getDiscussions,postComment,removeComment,startDiscussion};
