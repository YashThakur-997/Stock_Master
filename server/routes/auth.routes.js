let router = require('express').Router();
let { login_handler, signup_handler ,logout_handler } = require('../controller/auth.controller');
let { loginvalidation, signupvalidation } = require('../middleware/auth.middleware');


router.post('/login', loginvalidation, login_handler);

router.post('/signup', signupvalidation, signup_handler);

router.post('/logout', logout_handler);

module.exports = router;