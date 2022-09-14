const express = require('express');
const controller = require("../controllers/loginController")
const router = express.Router();

router.get('/login',controller.login_login);

router.post('/create',controller.login_create);

module.exports=router;