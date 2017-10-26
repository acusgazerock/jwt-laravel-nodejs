const jwt = require('jsonwebtoken')
var URLSafeBase64 = require('urlsafe-base64');
var Base64 = require('js-base64').Base64;

exports.getAuthUser = function (req, res) {

    var token = req.get('token');
    // check token
    if (token === undefined || token === null) {
        res.status(403).json({
            message: 'Token is required'
        })
    } else {
        var encoder = (!URLSafeBase64.validate(token)) ? 'Base64' : 'URLSafeBase64';
        var parts = token.split('.');
        var header = null;
        var payload = null;
        if (parts.length === 3) {

            if (encoder === 'Base64') {
                header = JSON.parse(Base64.decode(parts[0]))
                payload = JSON.parse(Base64.decode(parts[1]))
            } else {
                header = JSON.parse(URLSafeBase64.decode(parts[0]))
                payload = JSON.parse(URLSafeBase64.decode(parts[1]))
            }
            var now = Math.floor((new Date()).getTime() / 1000);

            //TODO: check signature token

            if ((now < payload.iat )||(now > payload.exp)) {
                res.status(403).json({
                    message: 'Error token_expired'
                })
            } else if (payload.sub) {
                req.getConnection(function (err, connection) {

                    connection.query("SELECT id, name, role, username, created_at, updated_at FROM USERS WHERE id = ? ", payload.sub, function (err, row) {
                        if (err) {
                            console.log("Error : %s ", err);
                            res.status(403).json({
                                message: err
                            })
                        }
                        console.log(row);
                        if (row && row.length > 0) {
                            res.send(row[0])
                        } else {
                            res.status(403).json({
                                message: 'data notfound'
                            })
                        }


                    });

                });
            } else {
                res.status(403).json({
                    message: 'Error token'
                })
            }

        } else {
            res.status(403).json({
                message: 'Error token'
            })
        }
    }


};


