const express = require('express');
const discussionsRouter = require('./discussions.route');
const router = express.Router();

router.use("/discussions",discussionsRouter);
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
module.exports = router;
