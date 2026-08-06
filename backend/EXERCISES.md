# 🛠️ Backend Feature-Based Practice Exercises

Welcome to the Feature-Based Backend Exercises! In production systems, backend code is often organized into **Feature Modules** (e.g., `health`, `store`, `media`) rather than single giant route folders.

This codebase contains 3 distinct Feature APIs with exercise files for practicing **CRUD routes (GET, POST, PUT, DELETE)** and **Middlewares**.

---

## 🚀 Getting Started

1. Open terminal in `backend`:
   ```bash
   cd backend
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Server runs on `http://localhost:3000`.

---

## 📂 Feature Architecture Overview

```
backend/src/features/
├── health/                  # 🏥 Feature 1: Health & Medical API
│   ├── routes/
│   │   ├── users.routes.js         # (Reference code)
│   │   ├── allergies.routes.js     # ✏️ Exercise: Allergies CRUD
│   │   ├── bloodtype.routes.js     # ✏️ Exercise: Blood Types CRUD
│   │   └── illnesses.routes.js     # ✏️ Exercise: Illnesses CRUD (w/ query filter)
│   └── middlewares/
│       ├── logger.middleware.js       # ✏️ Exercise: Logger
│       ├── validateBody.middleware.js # ✏️ Exercise: Body Validator
│       ├── apiKey.middleware.js       # ✏️ Exercise: API Key Auth
│       ├── requestTimer.middleware.js # ✏️ Exercise: Duration Timer
│       └── errorHandler.middleware.js # ✏️ Exercise: Central Error Handler
│
├── store/                   # 🛒 Feature 2: E-Commerce Store API
│   ├── routes/
│   │   ├── products.routes.js      # ✏️ Exercise: Products CRUD
│   │   ├── orders.routes.js        # ✏️ Exercise: Orders CRUD
│   │   └── reviews.routes.js       # ✏️ Exercise: Reviews CRUD
│   └── middlewares/
│       ├── stockCheck.middleware.js   # ✏️ Exercise: Quantity / Stock Middleware
│       └── discountCode.middleware.js # ✏️ Exercise: Promo Code Header Inspector
│
└── media/                   # 🎬 Feature 3: Movies & Media Streaming API
    ├── routes/
    │   ├── movies.routes.js        # ✏️ Exercise: Movies CRUD
    │   ├── actors.routes.js        # ✏️ Exercise: Actors CRUD
    │   └── playlists.routes.js     # ✏️ Exercise: Playlists CRUD
    └── middlewares/
        ├── ageRating.middleware.js      # ✏️ Exercise: Viewer Age Verification
        └── watchlistLimit.middleware.js  # ✏️ Exercise: Playlist Size Limit
```

---

## 📋 Endpoint Mounting Summary

| Feature | Sub-Route | Base URL | Endpoints to Build |
|---------|-----------|----------|-------------------|
| **Health** | Allergies | `/api/health/allergies` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Health** | Blood Types | `/api/health/bloodtypes` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Health** | Illnesses | `/api/health/illnesses` | `GET /` (query filtering!), `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Store** | Products | `/api/store/products` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Store** | Orders | `/api/store/orders` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Store** | Reviews | `/api/store/reviews` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Media** | Movies | `/api/media/movies` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Media** | Actors | `/api/media/actors` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |
| **Media** | Playlists | `/api/media/playlists` | `GET /`, `GET /:id`, `POST /`, `PUT /:id`, `DELETE /:id` |

---

## 🧪 How to Test

1. Use **VS Code REST Client**: Open `tests.http` and click "Send Request" above any request.
2. Use **Postman**: Send GET/POST/PUT/DELETE requests to `http://localhost:3000/api/...`.
