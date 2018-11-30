var jwt = require('jsonwebtoken');


var SEED = require('../config/config').SEED;

// Verificar Token
exports.verificaToekn = function(req, res, next) {
    var token = req.query.token;
    jwt.verify( token, SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded.usuario; // El usuario estara disponible en todas la peticiones de la aplicacion

        next();
    });
}
