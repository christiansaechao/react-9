// cors into backlog
// nodemon - while you're working, it'll hot reload your server.
// watching for any file changes

import express from "express";
import dotenv from "dotenv";
import UsersRouter from "./src/features/health/routes/users.routes.js";
import BloodTypesRouter from "./src/features/health/routes/bloodtype.routes.js";
import IllnessesRouter from "./src/features/health/routes/illnesses.routes.js";
import AllergiesRouter from "./src/features/health/routes/allergies.routes.js";

// TODO: Import your custom middleware functions here once implemented
// import loggerMiddleware from "./src/middlewares/logger.middleware.js";
// import apiKeyAuth from "./src/middlewares/apiKey.middleware.js";
// import requestTimer from "./src/middlewares/requestTimer.middleware.js";
// import errorHandler from "./src/middlewares/errorHandler.middleware.js";
dotenv.config();

const app = express();

// Global Middlewares
app.use(express.json()); // parses incoming JSON payloads

// Inline test middleware
app.use((req, res, next) => {
  console.log("something happening here");
  next();
});

// TODO: Register your custom logger or request timer middleware globally here
// app.use(loggerMiddleware);
// app.use(requestTimer);

// Route Mounting
app.use("/api/users", UsersRouter);
app.use("/api/bloodtypes", BloodTypesRouter);
app.use("/api/illnesses", IllnessesRouter);
app.use("/api/allergies", AllergiesRouter);

// TODO: Register global error handling middleware LAST (after all routes)
// app.use(errorHandler);

app.listen(3000, () =>
  console.log("Server has started on http://localhost:3000"),
); // start the server here on port 3000
