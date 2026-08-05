// cors into backlog
// nodemon - while you're working, it'll hot reload your server.
// watching for any file changes

import express from "express";
import UsersRouter from "./src/routes/users.routes.js";
// const express = require("express");

// what does router do? defines http requests inside routes
// const router = express.Router();

const app = express();

// ran globally every request this middleware
app.use(express.json()); // request that has json data => javascript

app.use((req, res, next) => {
  console.log("something happneing here");

  next();
});

// localhost:3000/api/users
app.use("/api/users", UsersRouter);
app.use("/api/bloodtypes", BloodTypesRouter);
app.use("/api/illnesses", IllnessesRouter);
app.use("/api/allergies", AllergiesRouter);

app.listen(3000, () => console.log("Server has started")); // start the server here on port 3000

// temporary database
// let animals = [];
// app.post("/", (req, res) => {
//   const { name, type } = req.body;

//   if (!name || !type) {
//     res.status(400).send({ success: false, msg: "Failed to create animal" });
//   }

//   animals.push(req.body);
//   res.status(200).send({ msg: "Created animal successfully", data: animals });
// });

// localhost:3000
// app.put("/:name", (req, res) => {
//   const name = req.params.name;
//   const { newName } = req.body;

//   if (!name) {
//     res.status(400).send({ msg: "There was no name provided" });
//   }

//   const newAnimals = animals.map((animal) => {
//     if (animal.name === name) {
//       animal.name = newName;

//       return animal;
//     }

//     return animal;
//   });

//   animals = newAnimals;

//   res.status(203).send({ success: true, data: animals });
// });

// POST: to create | get, put/patch update things, delete
// { name: "", type: "" }

/**
 * const [animal, setAnimal] = useState({ name: "Tony", type: "Cat" })
 *
 * const options = {
 *  method: "POST",
 *  headers: {
 *      content-type: "application/json",
 *  },
 *  body: {
 *      name: JSON.stringify(animal.name),
 *      type: JSON.stringify(naimal.type)
 *  }
 * }
 *
 * await fetch("http://localhost:3000/, options); // POST
 *
 * bit.ly/kjw0zikxjcoiasjkow3j4r4ij089jaksdfjwklejf // affiliate links
 *
 *
 * body - additional information / data sent with the request
 * params - to specify like directory to a resource
 * query - filtering
 */

// body, params, query

/**
 * req: {
 *  body: {
 *    name:
 *    type:
 *  }
 * }
 */

/**
 * 200 - ok
 * 201 - created
 * 203 -
 *
 * 300 - company, business codes
 *
 * 400 - bad request
 * 401 - Not authorized
 * 403 - Internal server error
 * 404 - Not Found
 *
 * 500 - internal server error
 */
