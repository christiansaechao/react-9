// ==========================================
// EXERCISE: User Playlists Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/media/routes/playlists.routes.js
// Instructions:
// 1. Create a dummy array of playlist objects.
//    Example item: { id: 1, name: "Weekend Favorites", movieIds: [1, 3], isPublic: true }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for playlists here
// const playlists = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/media/playlists
 * ----------------------------------------------------
 * Task: Fetch all user playlists.
 * Specification:
 * - Return HTTP status code 200 (OK) with JSON array of playlists.
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/media/playlists/:id
 * ----------------------------------------------------
 * Task: Fetch a single playlist by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return status 200 with playlist if found.
 * - Return status 404 with `{ error: "Playlist not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/media/playlists
 * ----------------------------------------------------
 * Task: Create a new movie playlist.
 * Specification:
 * - Extract `name`, `movieIds`, `isPublic` from `req.body`.
 * - Validate: Require `name`. Return 400 if missing.
 * - Push created playlist to array and return status 201 (Created).
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/media/playlists/:id
 * ----------------------------------------------------
 * Task: Update playlist name or movie list.
 * Specification:
 * - Extract `id` from `req.params`. Return 404 if missing.
 * - Update playlist properties from `req.body`.
 * - Return status 200 (OK).
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/media/playlists/:id
 * ----------------------------------------------------
 * Task: Delete a playlist.
 * Specification:
 * - Extract `id` from `req.params`. Return 404 if missing.
 * - Remove playlist from array and return status 200 (OK).
 */
// TODO: Implement DELETE /:id
