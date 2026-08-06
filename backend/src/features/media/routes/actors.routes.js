// ==========================================
// EXERCISE: Actors Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/media/routes/actors.routes.js
// Instructions:
// 1. Create a dummy array of actor objects.
//    Example item: { id: 1, name: "Leonardo DiCaprio", birthYear: 1974, famousFor: "Inception" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for actors here
// const actors = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/media/actors
 * ----------------------------------------------------
 * Task: Fetch all actors.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send JSON response containing all actors.
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/media/actors/:id
 * ----------------------------------------------------
 * Task: Fetch a single actor by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return status 200 with actor object if found.
 * - Return status 404 with `{ error: "Actor not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/media/actors
 * ----------------------------------------------------
 * Task: Add a new actor profile.
 * Specification:
 * - Extract `name`, `birthYear`, `famousFor` from `req.body`.
 * - Validate: If `name` is missing, return status 400 (Bad Request).
 * - Create new actor object and push to array.
 * - Return status 201 (Created) with created actor object.
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/media/actors/:id
 * ----------------------------------------------------
 * Task: Update actor profile information.
 * Specification:
 * - Extract `id` from `req.params` and updated fields from `req.body`.
 * - Return status 404 if actor does not exist.
 * - Update properties and return status 200 (OK).
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/media/actors/:id
 * ----------------------------------------------------
 * Task: Remove an actor profile.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Delete actor from array or return 404 if missing.
 * - Return status 200 (OK) with confirmation message.
 */
// TODO: Implement DELETE /:id

export default router;
