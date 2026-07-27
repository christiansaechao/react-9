# Authenticating Users and Requests with JWT

## Frontend

- [ ] **Setup Routes** for protected and unprotected pages (logged-in or logged-out users)
  - You can create multiple layouts in your router to group components more easily later.
- [ ] **Store the JWT** in memory (global state like Zustand or Redux) **or** in the browser (localStorage / sessionStorage).
- [ ] **Implement Authentication Check** in your layouts to verify if a user is signed in.
- [ ] **Send JWT with every request** to the backend when the user is signed in.
  - Include it in the request headers, **or**
  - Add it to your Axios configuration (e.g., using `axios.interceptors`) so it’s automatically added to every request.

---

## Backend

- [ ] **Create endpoints** for both **login** and **signup** (routes, controllers, services).
  - Test them using a simple `POST` request (Postman or your frontend) to ensure they connect properly.
- [ ] **Generate an access token** on login/signup and return it to the user.
- [ ] **Create a middleware** to verify the JWT on incoming requests.
  - The middleware should decode the token, validate it, and attach the user info to `req.user`.

---

## End Results

1. User logs in → Backend returns JWT
2. Frontend stores JWT → Sends with every request
3. Backend verifies JWT → Grants access

---

## 🔐 Essential Authentication Functions

| Library / Concept      | Function / Method                    | Description                                                                       | Example Usage                                                                           |
| ---------------------- | ------------------------------------ | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **bcrypt**             | `bcrypt.hash(password, saltRounds)`  | Hashes a plain-text password before storing it in the database.                   | `const hash = await bcrypt.hash(password, 10)`                                          |
| **bcrypt**             | `bcrypt.compare(password, hash)`     | Compares a plain-text password with a hashed one (used during login).             | `const isValid = await bcrypt.compare(password, user.password)`                         |
| **jsonwebtoken (JWT)** | `jwt.sign(payload, secret, options)` | Creates a JWT containing user data (e.g., `id`, `email`).                         | `const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' })` |
| **jsonwebtoken (JWT)** | `jwt.verify(token, secret)`          | Verifies a JWT and decodes its payload if valid.                                  | `const decoded = jwt.verify(token, process.env.JWT_SECRET)`                             |
| **jsonwebtoken (JWT)** | `jwt.decode(token)`                  | Decodes a JWT without verifying its signature (useful for reading, not security). | `const payload = jwt.decode(token)`                                                     |
| **Auth Middleware**    | `authenticateToken(req, res, next)`  | Verifies the JWT from headers, attaches `req.user` if valid.                      | `js\nconst auth = (req,res,next)=>{const token=req.headers['authorization'];...}`       |
| **Refresh Tokens**     | `rotateRefreshToken()`               | Generates a new refresh token and invalidates the old one.                        | `const newToken = jwt.sign(...); saveToDB(user, newToken)`                              |
| **User Model Method**  | `generateAuthToken()`                | Custom function to sign and return a JWT for a specific user.                     | `user.generateAuthToken = () => jwt.sign({ id: user.id }, secret)`                      |

---

### 🧠 Quick Notes

- Always **hash passwords** before storing them — never store plain text.
- Keep your **JWT secret** and **refresh token secrets** in `.env`.
- Use **short-lived access tokens** (10–15 minutes) and **longer refresh tokens** (7–30 days).
- In middleware, verify the token and attach `req.user` for downstream routes.
- Never decode a token (`jwt.decode`) for authorization logic — use `jwt.verify` instead.
