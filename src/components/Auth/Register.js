import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.scss";
import { postRegister } from "../../services/apiServices";

const Register = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [username, setUsername] = useState();

  const navigate = useNavigate();
  const handleRegister = async () => {
    //validate
    if (rePassword === password) {
      //submit apis
      let res = await postRegister(email, username, password);
      if (res && res.EC === 0) {
        toast.success(res.EM);
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
      }
    } else {
      toast.error("xac nhan mat khau khong dung");
    }
  };
  return (
    <div className="Register-container mt-5">
      <div className="title col-3 mx-auto fs-3 text-center">Register</div>
      <div className="welcome col-3 mx-auto text-center">
        Hello, my world !!!
      </div>
      <div className="content-form col-3 mx-auto">
        <div className="form-group ">
          <label>Username</label>
          <input
            type={"text"}
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your E-mail"
          />
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label>Confirm Password</label>
          <input
            type={"password"}
            className="form-control"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="text-end">
          <button className="btn btn-info" onClick={() => handleRegister()}>
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/login");
            }}>
            &#60;&#60; Go To Login Page
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
