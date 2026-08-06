import { Router } from "express";

const router = Router();

// ==========================================
// EXERCISE: Blood Types Routes (GET, POST, PUT, DELETE)
// ==========================================
// Instructions:
// 1. Create a dummy array of blood type records.
//    Example item: { id: 1, type: "O-", canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"], rhesusFactor: "negative" }
// 2. Implement the 5 endpoints below according to the specifications.
// 3. Test your endpoints using Postman, VS Code REST Client (.http files), or cURL.
// ==========================================

// TODO: Create initial dummy data array for blood types here
// const bloodTypes = [...];

/**
 * ----------------------------------------------------
 * 1. GET /api/bloodtypes
 * ----------------------------------------------------
 * Task: Fetch and return all blood types.
 * Specification:
 * - Return HTTP status code 200 (OK).
 * - Send the array of blood types as JSON.
 */
// TODO: Implement GET /


/**
 * ----------------------------------------------------
 * 2. GET /api/bloodtypes/:id
 * ----------------------------------------------------
 * Task: Fetch a single blood type by its ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Find the blood type in your array matching the ID.
 * - If found: Return status code 200 and the blood type object.
 * - If NOT found: Return status code 404 (Not Found) with message { error: "Blood type not found" }.
 */
// TODO: Implement GET /:id


/**
 * ----------------------------------------------------
 * 3. POST /api/bloodtypes
 * ----------------------------------------------------
 * Task: Add a new blood type to the database array.
 * Specification:
 * - Extract `type`, `canDonateTo`, and `rhesusFactor` from `req.body`.
 * - Validate input: If `type` is missing or invalid, return status code 400 (Bad Request).
 * - Generate a new ID and push the object into the array.
 * - Return status code 201 (Created) with the newly added object.
 */
// TODO: Implement POST /


/**
 * ----------------------------------------------------
 * 4. PUT /api/bloodtypes/:id
 * ----------------------------------------------------
 * Task: Update an existing blood type record by ID.
 * Specification:
 * - Extract `id` from `req.params` and updated fields from `req.body`.
 * - Search for the blood type with matching ID.
 * - If missing: Return 404 (Not Found).
 * - If present: Update the record's properties with the new values.
 * - Return status code 200 (OK) with the updated record.
 */
// TODO: Implement PUT /:id


/**
 * ----------------------------------------------------
 * 5. DELETE /api/bloodtypes/:id
 * ----------------------------------------------------
 * Task: Delete a blood type record by ID.
 * Specification:
 * - Extract `id` from `req.params`.
 * - Check if the record exists.
 * - If NOT found: Return 404 (Not Found).
 * - If found: Remove the record from the array.
 * - Return status code 200 (OK) with a message or deleted item.
 */
// TODO: Implement DELETE /:id


export default router;
