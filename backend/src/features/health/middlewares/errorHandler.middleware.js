/**
 * ==========================================
 * EXERCISE: Global Error Handler Middleware
 * ==========================================
 * Goal: Create Express central error handling middleware to capture unexpected exceptions.
 * 
 * Instructions:
 * 1. Write an Express error-handling middleware function: `errorHandler(err, req, res, next)`.
 *    (Note: Express requires ALL FOUR parameters `(err, req, res, next)` to recognize it as an error handler!)
 * 2. Log the error details to the console (`console.error(err.stack || err.message)`).
 * 3. Extract status code from `err.statusCode` or default to `500` (Internal Server Error).
 * 4. Send a JSON response:
 *    {
 *      success: false,
 *      message: err.message || "Internal Server Error",
 *      status: statusCode
 *    }
 * 
 * How to register in index.js:
 * - Must be registered LAST, after all `app.use('/api/...', router)` routes!
 */

// TODO: Implement the global error handler middleware function here

// const errorHandler = (err, req, res, next) => {
// };

// export default errorHandler;
