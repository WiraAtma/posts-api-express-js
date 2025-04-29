const {body} = require('express-validator')

exports.postValidators = () => [
    body('no_book')
    .notEmpty().withMessage('Nomor Buku Wajib Diisi')
    .isLength({min: 3}).withMessage('Nomor Buku Minimal 3 Kata'),

    body('title')
    .notEmpty().withMessage('Judul Buku Wajib Diisi')
    .isLength({min: 3}).withMessage('Judul Buku Minimal 3 Kata'),

    body('description')
    .notEmpty().withMessage('Deskripsi Buku Wajib Diisi')
    .isLength({min: 3}).withMessage('Deskripsi Buku Minimal 3 Kata'),
];