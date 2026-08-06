/**
 * ==========================================
 * EXERCISE: Request Body Validation Middleware
 * ==========================================
 * Goal: Create a middleware that ensures incoming POST / PUT request bodies contain required data.
 * 
 * Instructions:
 * 1. Write a higher-order middleware factory `validateBody(requiredFields)`.
 *    - `requiredFields` should be an array of field names (e.g., `["name", "severity"]`).
 * 2. Return a middleware function `(req, res, next)`.
 * 3. Loop through `requiredFields` and check if each field exists and is not empty in `req.body`.
 * 4. If any field is missing:
 *    - Respond immediately with HTTP status 400 (Bad Request).
 *    - Send JSON: `{ error: "Missing required field: <fieldName>" }`.
 *    - DO NOT call `next()`.
 * 5. If all fields are present:
 *    - Call `next()` to allow the request to proceed to the route handler.
 * 
 * Example usage in route file:
 * router.post("/", validateBody(["name", "severity"]), (req, res) => { ... });
 */

// TODO: Implement the body validation middleware factory here

// export const validateBody = (requiredFields) => {
//   return (req, res, next) => {
//     
//   };
// };
