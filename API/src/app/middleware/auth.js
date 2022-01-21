const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const autHeader = req.headers.authorization;

    if (!autHeader)
        return res.status(401).send({ error: 'Token não é provido!!!'});

    const parts = autHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).send({ error: 'Erro no Token!!!'});

    const [ scheme, token ] = parts;

    if (!/^Baerer$/i.test(scheme))
        return res.status(401).send({ error: 'Token Mal Formatado!!!'});

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalido!!!'});

        req.userId = decoded.id;
        return next();
    })
}