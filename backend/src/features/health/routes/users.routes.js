import { Router } from "express";
import { getAllUsers } from "../controllers/users.controllers.js";

const router = Router();
// all endpoints are prefixed with /api/users

router.get("/", getAllUsers);

// get user by specific id
// defensive programming

router.get("/:id", async (req, res) => {
  const id = req.params.id; // the one part of the incoming request
  // one user dynamically
  try {
    const { data, error } = await supabase.from("users").select().eq("id", id);
    if (error) {
      return res.send(error);
    }

    return res.status(200).send(data);
  } catch (err) {
    return res.send(err);
  }
});

// Create a new user at this endpoint
// id | first_name | last_name | updated_at | created_at
// auto generated |             | auto_generated | auto_generated

router.post("/", async (req, res) => {
  const first = req.body.first_name;
  const last = req.body.last_name;

  const { data, error } = await supabase
    .from("users")
    .insert({ first_name: first, last_name: last })
    .select();

  res.status(201).send({ users: data });
});

// we're trying to change/update a resource at this endpoint
// :id whats the point of the id? we need to specify which user we're updating
/**
 * params: id
 * body: {
 *  first_name?: "Something",
 *  last_name?: "Something"
 * }
 */

/**
 *
 * [first_name: Karina, last_name: harringer]
 *
 * New first/last name:
 * Input: (first name): Karina
 * Input: (last name): Huang
 * Button: Change
 *
 * upsert
 * insert, update
 *
 * 2^2
 *
 * Users
 *
 * Settings
 * -------------------------------------------
 *
 *
 * global state => settings() => settings page => reference global state with settings
 *
 * local storage => clears itself, if you clear your browser cache
 *
 *
 *
 * firstname: Ronald
 * lastname: Huang
 *
 *
 */

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { first_name, last_name } = req.body;

  let updates = {};

  const { data } = await supabase.from("users").eq("id", id);

  if (first_name) {
    updates.first_name = first_name;
  }

  if (last_name) {
    updates.last_name = last_name;
  }

  const { error } = await supabase.from("users").update(updates);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  // sent new data first_name, last_name
  const data = req.body;

  const newUsers = users.map((user) => {
    if (user.id === id) {
      user.last_name = data.last_name;
    }
    return user;
  });

  users = newUsers;

  user = newUsers.find((user) => user.id === id);
  res.status(203).send(user);
});

router.delete("/:id", (req, res) => {
  const items = req.params.id;

  const updatedItems = items.filter((item) => item.id !== id); // u gotta give this back to the original user array twin (thanks!)
  users = updatedItems;

  res.status(200).json({ message: `User ${items} deleted successfully!` }); // where does id come from? (i think i fixed it?)
});

export default router;
