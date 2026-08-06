/**
 * ==========================================
 * EXERCISE: Request Duration Timer Middleware
 * ==========================================
 * Goal: Create a middleware that measures total time taken to process each HTTP request.
 * 
 * Instructions:
 * 1. Write a function `requestTimer(req, res, next)`.
 * 2. Record the start timestamp when the request begins (`const start = Date.now()`).
 * 3. Attach a listener to `res.on('finish', () => { ... })`.
 *    - Calculate elapsed time (`const duration = Date.now() - start`).
 *    - Log the duration to console: `[TIMER] GET /api/users took 12ms`.
 * 4. Call `next()` immediately so the request moves forward.
 * 
 * Bonus: Set response header `res.setHeader('X-Response-Time', `${duration}ms`)` before calling `next()`.
 */

// TODO: Implement the request duration timer middleware function here

// const requestTimer = (req, res, next) => {
// };

// export default requestTimer;
