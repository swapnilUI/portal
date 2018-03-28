
const Discussion = require('../models/discussionsModel');

function getDiscussions(req,res){
    Discussion.find({},function(err,data){
      if (err) console.log ("error", err);
        res.json(data);
    });
}

module.exports = {getDiscussions};
