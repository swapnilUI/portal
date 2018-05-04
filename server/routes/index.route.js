const express = require('express');
const discussionsRouter = require('./discussions.route');
const userSignUpRouter = require('./userSignUp.route');
const postCommentsRouter = require('./postComments.route');
const removeCommentRouter = require('./removeComment.route');
const addDiscussionsRouter = require('./addDiscussion.route');
const userLoginRouter = require('./userLogin.route');
const router = express.Router();

router.use("/discussions",discussionsRouter);
router.use("/addDiscussion",addDiscussionsRouter);
router.use("/comments/",postCommentsRouter);
router.use("/removeComment/", removeCommentRouter);
router.use("/signup",userSignUpRouter);
router.use("/login",userLoginRouter);
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our portal!' });
});

module.exports = router;
