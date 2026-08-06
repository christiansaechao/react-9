// ==========================================
// EXERCISE: Media Movies Routes (GET, POST, PUT, DELETE)
// ==========================================
// Feature Directory: src/features/media/routes/movies.routes.js
// Instructions:
// 1. Create a dummy array of movie objects.
//    Example item: { id: 1, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, rating: "PG-13" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Export the router as default.
// ==========================================

// TODO: Create initial dummy data array for movies here
// const movies = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/media/movies
 * ----------------------------------------------------
 * Task: Fetch all movies in the media catalog.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send JSON response containing all movies.
 * - BONUS: Support `?genre=Sci-Fi` query parameter to filter movies by genre!
 */
// TODO: Implement GET /

/**
 * ----------------------------------------------------
 * 2. GET /api/media/movies/:id
 * ----------------------------------------------------
 * Task: Fetch a single movie by ID.
 * Specification:
 * - Extract `id` from `req.params`. (Convert to number!)
 * - Return status 200 with movie object if found.
 * - Return status 404 with `{ error: "Movie not found" }` if missing.
 */
// TODO: Implement GET /:id

/**
 * ----------------------------------------------------
 * 3. POST /api/media/movies
 * ----------------------------------------------------
 * Task: Add a new movie to the media catalog.
 * Specification:
 * - Extract `title`, `genre`, `releaseYear`, `rating` from `req.body`.
 * - Validate: If `title` or `genre` is missing, return status 400 (Bad Request).
 * - Create new movie object with auto-incremented ID and push to array.
 * - Return status 201 (Created) with the newly created movie.
 */
// TODO: Implement POST /

/**
 * ----------------------------------------------------
 * 4. PUT /api/media/movies/:id
 * ----------------------------------------------------
 * Task: Update an existing movie's details.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Return status 404 if movie does not exist.
 * - Update existing fields from `req.body`.
 * - Return status 200 (OK) with updated movie.
 */
// TODO: Implement PUT /:id

/**
 * ----------------------------------------------------
 * 5. DELETE /api/media/movies/:id
 * ----------------------------------------------------
 * Task: Remove a movie from the catalog.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Verify movie exists. Return 404 if missing.
 * - Delete movie from array.
 * - Return status 200 (OK) with confirmation message.
 */
// TODO: Implement DELETE /:id

export default router;
