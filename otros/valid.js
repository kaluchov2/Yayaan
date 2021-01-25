const {
    check
} = require('express-validator');
exports.validSign = [
    check('name', 'Nombre requerido').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('nombre debe de ser entre 4 y 32 caracteres'),
    check('email')
    .isEmail()
    .withMessage('Debe de ser un email valido'),
    check('password', 'el password es necesario').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('El password debe tener por lo menos 6 caracteres').matches(/\d/).withMessage('el password debe de contener un numero')
]

exports.validLogin = [
    check('email')
    .isEmail()
    .withMessage('Debe de ser un email valido'),
    check('password', 'el password es necesario').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('El password debe tener por lo menos 6 caracteres').matches(/\d/).withMessage('el password debe de contener un numero')
]


exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Debe de ser un correo electronico valido')
];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('6 caracteres como minimo')
]