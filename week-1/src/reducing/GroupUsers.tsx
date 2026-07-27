import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Larry", role: "admin" },
    { id: 2, name: "Jorge", role: "user" },
    { id: 3, name: "Karina", role: "user" },
    { id: 4, name: "Jin", role: "admin" },
    { id: 5, name: "Bone", role: "admin" },
    { id: 5, name: "Aziz", role: "support" },
    { id: 5, name: "Riley", role: "it" },
  ];

  const groupedRoles = users.reduce(
    (acc: any, curr: any) => {
      const role = curr.role;

      if (!acc.role) {
        acc[role].push(curr);
      } else {
        acc[role].push(curr);
      }

      return acc;
    },
    { admin: [], user: []},
  );

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
        {/* TODO: const grouped = users.reduce((acc, u) => {...}, {} as Record<string, typeof users>) Admin: , */}
        {groupedRoles.admin.map(() => )}
        {groupedRoles.user.map(() => )}
      </div>
    </ProblemCard>
  );
};
