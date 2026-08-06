/**
 * ==========================================
 * EXERCISE: Request Logger Middleware
 * ==========================================
 * Goal: Create a middleware function that logs details about every incoming request.
 * 
 * Instructions:
 * 1. Write a function `loggerMiddleware(req, res, next)`.
 * 2. Get the current timestamp (e.g., `new Date().toISOString()`).
 * 3. Get the HTTP Method (`req.method`) and request URL (`req.originalUrl` or `req.url`).
 * 4. Print to the console: `[TIMESTAMP] METHOD - URL`
 *    Example: `[2026-08-05T15:00:00.000Z] GET - /api/users`
 * 5. Call `next()` to pass control to the next handler. (CRITICAL: Don't forget `next()`, or requests will hang!)
 * 6. Export the middleware as default.
 * 
 * How to test:
 * - Import and register in `index.js` using `app.use(loggerMiddleware)` before your route declarations.
 */

// TODO: Implement the logger middleware function here

// const loggerMiddleware = (req, res, next) => {
// };

// export default loggerMiddleware;
