const express=require('express')
const rutas=express.Router()
rutas.use('/',require('./user.routes'))
module.exports =rutas