import ModalCreateUser from "./ModalCreateUser";

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
        <div>
          Table user
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
