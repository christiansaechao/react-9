// ==========================================
// EXERCISE: Store Orders Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/store/routes/orders.routes.js
// Instructions:
// 1. Create a dummy array of order objects.
//    Example item: { id: 101, productId: 1, quantity: 2, totalAmount: 199.98, status: "pending" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for orders here
// const orders = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/store/orders
 * ----------------------------------------------------
 * Task: Fetch all customer orders.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send JSON response containing all order objects.
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/store/orders/:id
 * ----------------------------------------------------
 * Task: Fetch a single order by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return status 200 with order if found.
 * - Return status 404 with `{ error: "Order not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/store/orders
 * ----------------------------------------------------
 * Task: Place a new store order.
 * Specification:
 * - Extract `productId`, `quantity`, `totalAmount` from `req.body`.
 * - Validate: Return status 400 if `productId` or `quantity` is missing or less than 1.
 * - Create new order object with `status: "pending"` and new `id`.
 * - Return status 201 (Created) with the created order.
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/store/orders/:id
 * ----------------------------------------------------
 * Task: Update an order status (e.g., from "pending" to "shipped" or "delivered").
 * Specification:
 * - Extract `id` from `req.params` and `status` from `req.body`.
 * - If order not found, return status 404 (Not Found).
 * - Update status property.
 * - Return status 200 (OK) with updated order object.
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/store/orders/:id
 * ----------------------------------------------------
 * Task: Cancel / delete an order.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Check if order exists. Return 404 if missing.
 * - Delete order from array.
 * - Return status 200 (OK) with confirmation message.
 */
// TODO: Implement DELETE /:id
