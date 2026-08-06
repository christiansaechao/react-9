// ==========================================
// EXERCISE: Product Reviews Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/store/routes/reviews.routes.js
// Instructions:
// 1. Create a dummy array of review objects.
//    Example item: { id: 1, productId: 1, author: "Jane Doe", rating: 5, comment: "Amazing sound!" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for reviews here
// const reviews = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/store/reviews
 * ----------------------------------------------------
 * Task: Fetch all product reviews.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send JSON response containing all reviews.
 * - BONUS: Filter by `?productId=1` if query parameter is provided!
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/store/reviews/:id
 * ----------------------------------------------------
 * Task: Fetch a single review by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return status 200 with review object if found.
 * - Return status 404 with `{ error: "Review not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/store/reviews
 * ----------------------------------------------------
 * Task: Post a new review for a product.
 * Specification:
 * - Extract `productId`, `author`, `rating`, `comment` from `req.body`.
 * - Validate: Rating must be between 1 and 5. Return status 400 if invalid.
 * - Add review to array with generated ID.
 * - Return status 201 (Created) with created review.
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/store/reviews/:id
 * ----------------------------------------------------
 * Task: Update review text or rating.
 * Specification:
 * - Extract `id` from `req.params` and updated fields from `req.body`.
 * - Return 404 if review does not exist.
 * - Update review properties and return status 200 (OK).
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/store/reviews/:id
 * ----------------------------------------------------
 * Task: Delete a review by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return 404 if missing, or remove and return status 200 (OK) with success message.
 */
// TODO: Implement DELETE /:id
