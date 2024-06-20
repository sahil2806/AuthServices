const {StatusCodes} = require('http-status-codes');

class AppErrors extends Error {
     constructor(
        name= 'AppError',
        message = 'Somthing went wrong',
        description = 'Somthing went wrong',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
     ){
        super();
        this.name = name;
        this.message = message;
        this.description = description;
        this.statusCode = statusCode;
     }
}

module.exports = AppErrors;