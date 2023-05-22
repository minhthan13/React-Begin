import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUser from "./AddUser";
const MyComponent = () => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "Than", age: 11 },
    { id: 2, name: "Nguyen", age: 17 },
    { id: 3, name: "Krantz", age: 12 },
    { id: 4, name: "Ware", age: 25 },
    { id: 5, name: "Yarn", age: 27 },
    { id: 6, name: "React", age: 10 },
    { id: 7, name: "Ruby", age: 14 },
    { id: 8, name: "Chrome", age: 30 },
  ]);
  const delUser = (userId) => {
    let listUserClone = listUser;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone);
  };
  const addNewUser = (objUser) => {
    setListUser([objUser, ...listUser]);
  };
  return (
    <div>
      <AddUser addNewUser={addNewUser} />
      <br />
      <hr />
      <DisplayInfor listUser={listUser} delUser={delUser} />
    </div>
  );
};

export default MyComponent;
