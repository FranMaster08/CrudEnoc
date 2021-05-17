let db = require('../db/fakebd')
class UserController {

    static getUser(req, res, next) {
        if (db.length > 0) {
            if (!req.query.id)
                res.status(200).json({ mensaje: 'ok', data: db })
            else {
                let result = db.filter(x => x.id == req.query.id)
                res.status(200).json({ mensaje: 'ok', data: result })
            }
        }
        else {
            res.status(200).json({ mensaje: 'Base de datos Vacia', data: null })
        }
    }
    static addUser(req, res, next) {
        let user=req.body
        db.push(user)
        res.status(200).json({ mensaje: 'ok',newuser:user, data: db })
    }
    static deleteUser(req, res, next) {
        if (db.length > 0) {
            if (!req.params.id)
                res.status(400).json({ mensaje: 'Ingresa el id que deseas borrar'})
            else {
                let result = db.filter(x => x.id != req.params.id)
                db=result
                res.status(200).json({ mensaje: 'ok', data: db })
            }
        }
        else {
            res.status(200).json({ mensaje: 'Base de datos Vacia', data: null })
        }
    }
    static updateUser(req, res, next) {
        
    }

}

module.exports = UserController