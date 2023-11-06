import React from "react";
import getUsers from "../../../services/getUsers";
import Link from "next/link";

const StaticSideGeneration32 = async () => {
  const getUsersList = await getUsers();

  return (
    <div>
      <h1>userlist</h1>
      {getUsersList.map((user) => (
        <h2>
          <Link href={`/staticSideGeneration/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
};

export default StaticSideGeneration32;
