class CustomError extends Error {
    constructor(code, message) {
        super(code, message)

<<<<<<< HEAD
        if (Error.captureStackTrace) {
=======
        if(Error.captureStackTrace) {
>>>>>>> a5f50a74cc5ad0cfe89f21d83034893c17f04e9e
            Error.captureStackTrace(this, CustomError);
        }

        this.code = code;
        this.message = message;
    }
}

module.exports = CustomError;