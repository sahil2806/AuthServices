const express = require('express');
const router = express.Router();

const UserController = require('../../controllers/user-controller')

const {AuthRequestValidators} = require('../../middlewares/index');

router.post('/signup',AuthRequestValidators.validateUserAuth ,UserController.create);
router.get('/signin',AuthRequestValidators.validateUserAuth,UserController.signin);
router.get('/isAuthenticated',UserController.isAuthenticated);

module.exports = router;





