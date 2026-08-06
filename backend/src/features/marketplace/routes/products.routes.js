// ==========================================
// EXERCISE: Store Products Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/store/routes/products.routes.js
// Instructions:
// 1. Create a dummy array of product objects.
//    Example item: { id: 1, name: "Wireless Headphones", price: 99.99, stock: 15, category: "Electronics" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for products here
// const products = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/store/products
 * ----------------------------------------------------
 * Task: Fetch all products in store inventory.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send JSON response containing the array of products.
 * - BONUS: Handle query parameter `?category=Electronics` to filter products by category!
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/store/products/:id
 * ----------------------------------------------------
 * Task: Fetch a single product by its ID.
 * Specification:
 * - Extract `id` from `req.params`. (Convert to number!)
 * - Find matching product.
 * - Return status 200 with product object if found.
 * - Return status 404 with `{ error: "Product not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/store/products
 * ----------------------------------------------------
 * Task: Add a new product to inventory.
 * Specification:
 * - Extract `name`, `price`, `stock`, `category` from `req.body`.
 * - Validate: If `name` or `price` is missing/invalid, return status 400 (Bad Request).
 * - Create new product with unique ID and push to products array.
 * - Return status 201 (Created) with the newly created product.
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/store/products/:id
 * ----------------------------------------------------
 * Task: Update an existing product's details (price, stock, or name).
 * Specification:
 * - Extract `id` from `req.params`.
 * - Find product by ID. If not found, return status 404 (Not Found).
 * - Update existing fields with values provided in `req.body`.
 * - Return status 200 (OK) with the updated product.
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/store/products/:id
 * ----------------------------------------------------
 * Task: Remove a product from inventory.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Verify product exists. Return 404 if not found.
 * - Remove product from array.
 * - Return status 200 (OK) with message `{ message: "Product deleted successfully" }`.
 */
// TODO: Implement DELETE /:id
