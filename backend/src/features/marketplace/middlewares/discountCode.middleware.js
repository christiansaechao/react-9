/**
 * ==========================================
 * EXERCISE: Discount Code Middleware
 * ==========================================
 * Feature Directory: src/features/store/middlewares/discountCode.middleware.js
 * Goal: Inspect incoming header for a discount code and attach discount rate to `req.discount`.
 * 
 * Instructions:
 * 1. Create a middleware `discountCodeMiddleware(req, res, next)`.
 * 2. Get header `x-discount-code` from `req.headers`.
 * 3. If header is `"SAVE10"`, set `req.discountPercent = 10`.
 * 4. If header is `"SAVE20"`, set `req.discountPercent = 20`.
 * 5. If missing or unrecognized, set `req.discountPercent = 0`.
 * 6. Always call `next()` to let the route handler process the discounted price.
 */

// TODO: Implement discountCodeMiddleware function here

// const discountCodeMiddleware = (req, res, next) => {
// };

// export default discountCodeMiddleware;
