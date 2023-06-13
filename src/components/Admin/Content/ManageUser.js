import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div>
      <div className="manage-user-container">
        <div className="title">Manage Users</div>
      </div>
      <div className="users-content">
        <div>
          <button>add new user</button>
        </div>
        <div>Table user</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManageUser;
