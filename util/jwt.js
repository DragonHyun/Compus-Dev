const jwt = require('jsonwebtoken');
const { secretKey, options } = require('../config/jwtSecretKey');
<<<<<<< HEAD
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;
=======
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e

module.exports = {
    createToken: async (user) => {
        const payload = {
            id: user.id,
            email: user.email,
        };
<<<<<<< HEAD
=======

>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e
        const result = {
            token: jwt.sign(payload, secretKey, options),
        };
        return result.token;
    },

    verifyToken: async (token) => {
        let decoded;
<<<<<<< HEAD
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED;
            } else if (err.message === 'invalid token') {
                console.log('invalid token');
                console.log(TOKEN_INVALID);
                return TOKEN_INVALID;
            } else {
                console.log('invalid token');
                return TOKEN_INVALID;
            }
=======
        
        try{
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            next(err);
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e
        }

        return decoded;
    }
}