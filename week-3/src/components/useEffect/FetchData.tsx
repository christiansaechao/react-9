import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from: https://randomuser.me/api/?results=10
- Run fetch when component mounts
- Display:
  - Name
  - Email
  - Profile picture
- Add a "Refresh User" button (optional)
*/

export default function RandomUser() {
  const [users, setUsers] = useState<any>();

  async function fetchUser() {
    try {
      const data = await fetch("https://randomuser.me/api/?results=10").then(
        (res) => res.json(),
      );

      console.log(data);
      setUsers(data.results);
    } catch (err) {
      throw new Error("There was an error: " + err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <button>Update State</button>
      {users?.map((user: any) => {
        return (
          <div>
            {user.name.first}, {user.name.last}
          </div>
        )
      })}
    </div>
  );
}
