const asyncHandler = (requesthandler) => {
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next)).catch((err) =>
            next(err)
        );
    };
};

export { asyncHandler };

/*
const asyncHandler = (fn) => async (err, req, res, next)=>{
    try {
        await fn(err, req, res, next)
    } catch (error) {
        res.status(err.code || 500 ).json({
            success: false,
            message: err.message
        })
    }
} 
    */
