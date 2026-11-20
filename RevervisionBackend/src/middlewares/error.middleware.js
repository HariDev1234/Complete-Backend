
function errorMiddleware(err, req, res, next) {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        status: "Error",
        statusCode,
        message: err.message || 'Internal server error',
    })
};

export default errorMiddleware;