import { Router } from "express";

const router = Router();

// ==========================================
// EXERCISE: Allergies Routes (GET, POST, PUT, DELETE)
// ==========================================
// Instructions:
// 1. Create a dummy array of allergy objects.
//    Example item: { id: 1, name: "Peanuts", severity: "High" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Test your endpoints using Postman, VS Code REST Client (.http files), or cURL.
// ==========================================

// TODO: Create initial dummy data array for allergies here
// const allergies = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/allergies
 * ----------------------------------------------------
 * Task: Fetch and return all allergy records.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send the full array of allergies as JSON.
 */
// TODO: Implement GET /


/**
 * ----------------------------------------------------
 * 2. GET /api/allergies/:id
 * ----------------------------------------------------
 * Task: Fetch a single allergy by its ID.
 * Specification:
 * - Extract `id` from `req.params`. (Note: params are strings, convert to number if needed!)
 * - Find the allergy matching the ID in your array.
 * - If found: Return status code 200 and the allergy object.
 * - If NOT found: Return status code 404 (Not Found) with an error object e.g. { error: "Allergy not found" }.
 */
// TODO: Implement GET /:id


/**
 * ----------------------------------------------------
 * 3. POST /api/allergies
 * ----------------------------------------------------
 * Task: Add a new allergy to the array.
 * Specification:
 * - Extract `name` and `severity` from `req.body`.
 * - Validate input: If `name` or `severity` is missing, return status code 400 (Bad Request) with a message.
 * - Create a new object with an auto-incremented `id` (e.g., allergies.length + 1 or Date.now()).
 * - Add the new object to the `allergies` array.
 * - Return status code 201 (Created) with the newly created allergy object.
 */
// TODO: Implement POST /


/**
 * ----------------------------------------------------
 * 4. PUT /api/allergies/:id
 * ----------------------------------------------------
 * Task: Update an existing allergy by its ID.
 * Specification:
 * - Extract `id` from `req.params` and updated fields (`name`, `severity`) from `req.body`.
 * - Find the allergy item matching the ID.
 * - If allergy does not exist: Return status code 404 (Not Found).
 * - If found: Update the matching object's fields.
 * - Return status code 200 (OK) with the updated allergy object.
 */
// TODO: Implement PUT /:id


/**
 * ----------------------------------------------------
 * 5. DELETE /api/allergies/:id
 * ----------------------------------------------------
 * Task: Delete an allergy by its ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Check if the allergy exists in the array.
 * - If NOT found: Return status code 404 (Not Found).
 * - If found: Filter or remove the item from the array.
 * - Return status code 200 (OK) or 204 (No Content) with a success message.
 */
// TODO: Implement DELETE /:id


export default router;
