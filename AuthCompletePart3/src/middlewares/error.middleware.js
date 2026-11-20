
function errorMiddleware(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    return res.status(statusCode).json({
        status: "error",
        statusCode,
        message: message
    })
}

export default errorMiddleware;