class ExpressError extends Error{
    constructor(statusCode, message){
        super();
        this.statuCode=statusCode;
        this.message=message;
    }
}

module.exports=ExpressError;