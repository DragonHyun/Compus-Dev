const CustomError = require('../util/custom-error');
<<<<<<< HEAD
const { logger } = require('../config/winston');
=======
//const { logger } = require('../config/winston');
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e

module.exports = (err, req, res, next) => {
    const errObj = {
        req: {
            headers: req.headers,
            query: req.query,
            body: req.body,
            route: req.route
        },
        error: {
            message: err.message,
            stack: err.stack,
            status: err.status
        }
    }

    if (err instanceof CustomError) {
<<<<<<< HEAD
        logger.error(errObj);
=======
        //logger.error(errObj);
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e
        return res.status(400).json({
            isSuccess: false,
            code: err.code,
            message: err.message
        });
    }
    console.log(err);
<<<<<<< HEAD
    logger.error(errObj);
=======
    //logger.error(errObj);
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e
    return res.status(500).json(err);
}