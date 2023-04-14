//modules
const express = require("express");
const router = express.Router();
const {userController} = require('../controllers/userController');

router.post('/create',userController)

module.exports = router;