import React, { useState } from "react";
import "../sass/DisplayInfor.scss";
const DisplayInfor = (props) => {
  const { listUser } = props;
  const [isShowHide, setShowHide] = useState(true);

  return (
    <div className="list-user">
      <span onClick={() => setShowHide(!isShowHide)}>
        {isShowHide ? "Hide list User: " : "Show List User:"}
      </span>
      <hr />
      {isShowHide && (
        <>
          {listUser.map((user) => {
            return (
              <div className={user.age > 17 ? "green" : "red"} key={user.id}>
                <div>Name is: {user.name}</div>
                <div>Age is: {user.age}</div>
                <button onClick={() => props.delUser(user.id)}>Delete</button>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfor;
