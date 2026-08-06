import { Router } from "express";

const router = Router();

// ==========================================
// EXERCISE: Illnesses Routes (GET, POST, PUT, DELETE)
// ==========================================
// Instructions:
// 1. Create a dummy array of illness records.
//    Example item: { id: 1, name: "Asthma", chronic: true, category: "Respiratory" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Test your endpoints using Postman, VS Code REST Client (.http files), or cURL.
// ==========================================

// TODO: Create initial dummy data array for illnesses here
// const illnesses = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/illnesses
 * ----------------------------------------------------
 * Task: Fetch all illness records (Bonus: handle query filtering!).
 * Specification:
 * - Return HTTP status code 200 (OK) with the full array of illnesses.
 * - BONUS TASK: Check if `req.query.chronic` is passed (e.g. GET /api/illnesses?chronic=true).
 *   If present, filter the returned list to only include matching illnesses!
 */
// TODO: Implement GET /


/**
 * ----------------------------------------------------
 * 2. GET /api/illnesses/:id
 * ----------------------------------------------------
 * Task: Fetch a single illness record by ID.
 * Specification:
 * - Parse `id` from `req.params`.
 * - Search the array for an illness matching the ID.
 * - Return status 200 and the illness object if found.
 * - Return status 404 with { error: "Illness not found" } if not found.
 */
// TODO: Implement GET /:id


/**
 * ----------------------------------------------------
 * 3. POST /api/illnesses
 * ----------------------------------------------------
 * Task: Add a new illness record.
 * Specification:
 * - Extract `name`, `chronic`, and `category` from `req.body`.
 * - Validate input: Ensure `name` and `category` are provided.
 * - Return status 400 (Bad Request) if validation fails.
 * - If valid, create new object with auto-incremented ID and push to array.
 * - Return status 201 (Created) with the new illness record.
 */
// TODO: Implement POST /


/**
 * ----------------------------------------------------
 * 4. PUT /api/illnesses/:id
 * ----------------------------------------------------
 * Task: Update an existing illness record.
 * Specification:
 * - Extract `id` from `req.params` and updated data from `req.body`.
 * - Find the illness in the array. If missing, return status 404 (Not Found).
 * - Update `name`, `chronic`, or `category` fields accordingly.
 * - Return status 200 (OK) with the updated illness object.
 */
// TODO: Implement PUT /:id


/**
 * ----------------------------------------------------
 * 5. DELETE /api/illnesses/:id
 * ----------------------------------------------------
 * Task: Delete an illness record by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Locate the illness in the array.
 * - If missing, return status 404 (Not Found).
 * - Remove the illness from the array and return status 200 (OK) with a message.
 */
// TODO: Implement DELETE /:id


export default router;
