const jwt = require('jsonwebtoken');
const { secretKey, options } = require('../config/jwtSecretKey');

module.exports = {
    createToken: async (user) => {
        const payload = {
            id: user.id,
            email: user.email,
        };

        const result = {
            token: jwt.sign(payload, secretKey, options),
        };
        return result.token;
    },

    verifyToken: async (token) => {
        let decoded;
        
        try{
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            next(err);
        }

        return decoded;
    }
}