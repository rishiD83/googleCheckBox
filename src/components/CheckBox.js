import React, { useEffect, useState } from "react";

const userData = [
  { name: "User 1" },
  { name: "User 2" },
  { name: "User 3" },
  { name: "User 4" },
];

function CheckBox(props) {
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "selectAll") {
      const tempUsers = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      console.log("TempUser:", tempUsers);
      setUsers(tempUsers);
    } else {
      let tempUsers = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      console.log("TempUser:", tempUsers);
      setUsers(tempUsers);
    }
  };

  useEffect(() => {
    setUsers(userData);
  }, []);

  return (
    <div className="container">
      <h3>Select Users</h3>
      <div className="selectAll">
        <input
          type="checkbox"
          name="selectAll"
          onChange={handleChange}
          checked={users.filter((user) => user?.isChecked !== true).length < 1}
        ></input>
        <label>Select All</label>
      </div>
      <br />
      {users.map((user) => (
        <div className="select" key={user.name}>
          <input
            type="checkbox"
            name={user.name}
            onChange={handleChange}
            checked={user?.isChecked || false}
          ></input>
          <label>{user.name}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
