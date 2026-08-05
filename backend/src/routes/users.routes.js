import { Router } from "express";

const router = Router();

let users = [
  { id: 1, first_name: "Riley", last_name: "Irwin", blood_type_id: 1 },
  { id: 2, first_name: "George", last_name: "Irwin", blood_type_id: 2 },
  { id: 3, first_name: "Karina", last_name: "Irwin", blood_type_id: 4 },
  { id: 4, first_name: "Aziz", last_name: "Irwin", blood_type_id: 3 },
];

// all endpoints are prefixed with /api/users

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.get("/:id", (req, res) => {
  const id = req.params.id; // the one part of the incoming request
  // one user dynamically
  const user = users.filter((user) => user.id === id);

  res.send(user);
});

router.post("/", (req, res) => {
  if (
    req.body.firstName != null &&
    req.body.lastName != null &&
    req.body.bloodTypeId != null
  ) {
    const length = users.length;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const bloodTypeId = req.body.bloodTypeId;

    const newUser = {
      id: length + 1,
      first_name: firstName,
      last_name: lastName,
      blood_type_id: bloodTypeId,
      createdAt: "now",
      updatedAt: "now",
    };

    const newUsers = [...users, newUser];
    users = newUsers;

    res.status(200).send(`User successfully added to users: ${newUser}`);
  } else {
    res.send("Could not add user to array: Missing user parameter");
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  // sent new data first_name, last_name, blood_type
  const data = req.body;

  // find the blood_type_id

  const newUsers = users.map((user) => {
    if (user.id === id) {
      user.first_name = data.first_name;
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
