const express=require('express')
const rute=express.Router()
const controlador=require('../controller/user.controller')
rute.get('/users',controlador.getUser)
rute.get('/getuser',controlador.getUser)
rute.post('/addUser',controlador.addUser)
rute.put('/updateUser/:id',controlador.updateUser)
rute.delete('/deleteUser/:id',controlador.deleteUser)
module.exports =rute