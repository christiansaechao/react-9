/**
 * ==========================================
 * EXERCISE: Viewer Age Rating Check Middleware
 * ==========================================
 * Feature Directory: src/features/media/middlewares/ageRating.middleware.js
 * Goal: Restrict access to R-rated content based on user age header.
 * 
 * Instructions:
 * 1. Create a middleware `ageRatingMiddleware(req, res, next)`.
 * 2. Get `x-user-age` from `req.headers`.
 * 3. Convert `x-user-age` to a number (`const age = Number(req.headers['x-user-age'])`).
 * 4. If age is missing or less than 17:
 *    - Return HTTP status 403 (Forbidden) with `{ error: "Access denied. Viewer must be 17 or older." }`.
 *    - Do NOT call `next()`.
 * 5. If age >= 17:
 *    - Call `next()`.
 */

// TODO: Implement ageRatingMiddleware function here

// const ageRatingMiddleware = (req, res, next) => {
// };

// export default ageRatingMiddleware;
