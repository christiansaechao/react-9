/**
 * ==========================================
 * EXERCISE: Playlist Limit Middleware
 * ==========================================
 * Feature Directory: src/features/media/middlewares/watchlistLimit.middleware.js
 * Goal: Limit playlist movie array to a max of 20 items.
 * 
 * Instructions:
 * 1. Create a middleware `watchlistLimitMiddleware(req, res, next)`.
 * 2. Inspect `req.body.movieIds`.
 * 3. If `movieIds` is an array and `movieIds.length > 20`:
 *    - Return HTTP status 400 (Bad Request) with `{ error: "Playlists cannot contain more than 20 items." }`.
 *    - Do NOT call `next()`.
 * 4. Otherwise call `next()`.
 */

// TODO: Implement watchlistLimitMiddleware function here

// const watchlistLimitMiddleware = (req, res, next) => {
// };

// export default watchlistLimitMiddleware;
