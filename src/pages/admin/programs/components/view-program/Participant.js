import React from "react";
import List from "./User";

function Participant({ users }) {
  return (
    <>
      {users.map((user) => (
        <List
          key={user._id}
          name={user.name}
          nric={user.nric}
          phone={user.phone}
          address={user.address}
          discipline={user.discipline}
          expertise={user.expertise}
          role={user.role}
        />
      ))}
    </>
  );
}

export default Participant;
