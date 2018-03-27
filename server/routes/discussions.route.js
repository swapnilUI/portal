const express = require('express');
const discussionsCtrl = require("../controllers/discussions.controller");

const router = express.Router();

router.route('/')
      .get(discussionsCtrl.getDiscussions);

module.exports = router;
