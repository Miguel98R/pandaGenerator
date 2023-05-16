const json = require('body-parser/lib/types/json')
const express = require('express')
const router = express.Router()


let {newQR} = require('../controllers/qr.controller')


//REGISTRO DEL USUARIO
router.post('/newQR', newQR)


module.exports = router
