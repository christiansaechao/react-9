/**
 * ==========================================
 * EXERCISE: Inventory Stock Check Middleware
 * ==========================================
 * Feature Directory: src/features/store/middlewares/stockCheck.middleware.js
 * Goal: Verify that requested item quantity is in stock before placing an order.
 * 
 * Instructions:
 * 1. Create a middleware `stockCheckMiddleware(req, res, next)`.
 * 2. Read `quantity` from `req.body`.
 * 3. Assume maximum allowed item quantity per order is 10 units.
 * 4. If `quantity > 10` or `quantity <= 0`:
 *    - Return HTTP status 400 (Bad Request) with `{ error: "Invalid quantity or insufficient stock" }`.
 *    - Do NOT call `next()`.
 * 5. If valid, call `next()`.
 */

// TODO: Implement stockCheckMiddleware function here

// const stockCheckMiddleware = (req, res, next) => {
// };

// export default stockCheckMiddleware;
