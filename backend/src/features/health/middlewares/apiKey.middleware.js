/**
 * ==========================================
 * EXERCISE: API Key Authentication Middleware
 * ==========================================
 * Goal: Create a middleware that protects routes by checking for a valid API key in headers.
 * 
 * Instructions:
 * 1. Write a middleware function `apiKeyAuth(req, res, next)`.
 * 2. Define a secret API key string (e.g. `const API_KEY = "supersecret123"`).
 * 3. Retrieve the key from incoming headers: `const keyFromHeader = req.headers['x-api-key']`.
 * 4. Check if key is missing or does not match `API_KEY`.
 * 5. If missing or invalid:
 *    - Return HTTP status 401 (Unauthorized) with JSON `{ error: "Access denied. Invalid or missing API key." }`.
 *    - Do NOT call `next()`.
 * 6. If valid:
 *    - Call `next()` so the request continues to the endpoint.
 * 
 * How to test:
 * - Apply to specific routes or globally in `index.js`.
 * - Send a request in Postman/REST Client with header `x-api-key: supersecret123`.
 */

// TODO: Implement the API Key middleware function here

// const apiKeyAuth = (req, res, next) => {
// };

// export default apiKeyAuth;
