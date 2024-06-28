const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller')

const {AuthRequestValidators} = require('../../middlewares/index');

router.post('/signup',AuthRequestValidators.validateUserAuth ,UserController.create);// For signUP
router.get('/signin',AuthRequestValidators.validateUserAuth,UserController.signin); // For SignIN
router.get('/isAuthenticated',UserController.isAuthenticated);                      // isAuthenticated check BY Token
router.get('/isAdmin',AuthRequestValidators.validateIsAdminRequest,UserController.isAdmin); // user Is admin or not

module.exports = router;






