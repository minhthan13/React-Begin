import React, { useState } from "react";

const AddUser = (props) => {
  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();
  const newUser = (e) => {
    e.preventDefault();
    props.addNewUser({
      id: Math.floor(Math.random() * 100 - 1) + "-random",
      name: userName,
      age: userAge,
    });
  };
  return (
    <div>
      <span>My Name is: {userName}</span>
      <br />
      <span>My Age is: {userAge}</span>
      <>
        <form>
          <label>Name is: </label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          <br />
          <label>Age is: </label>
          <input type="text" onChange={(e) => setUserAge(e.target.value)} />
          <br />
          <button onClick={(e) => newUser(e)}>Add</button>
        </form>
      </>
    </div>
  );
};
export default AddUser;
