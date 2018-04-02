const express = require('express');
const router = express.Router();
const userCtrl = require("../controllers/user.controller");


router.route('/').post(userCtrl.login)

module.exports = router;
