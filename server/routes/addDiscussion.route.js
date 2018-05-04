const express = require("express");

const discussionsCtrl = require('../controllers/discussions.controller');

const router = express.Router();

router.route("/")
      .post(discussionsCtrl.startDiscussion);

module.exports = router;
