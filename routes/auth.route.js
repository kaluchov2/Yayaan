const express = require('express')
const router = express.Router()

// declarar Controllers
const {
    email,
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    facebookController
} = require('../controllers/auth.controller')


const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../otros/valid')

router.post('/registro', validSign, registerController)
router.post('/login', validLogin, signinController)
router.post('/activation', activationController)
router.put('/password/forget', forgotPasswordValidator, forgotPasswordController);
router.put('/password/reset', resetPasswordValidator, resetPasswordController);
router.get('/user')

// // forgot reset password



// // Google and Facebook Login
router.post('/googlelogin', googleController)
router.post('/facebooklogin', facebookController)
module.exports = router