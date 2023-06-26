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

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleRegister = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }
    //submit apis
    if (rePassword === password) {
      let res = await postRegister(email, username, password);
      if (res && res.EC === 0) {
        toast.success(res.EM);
        navigate("/login");
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
      }
    } else {
      toast.error("xac nhan mat khau khong dung");
    }
  };
  return (
    <div className="Register-container ">
      <div className="header">
        <span>Already have an account yet?</span>
        <button
          onClick={() => {
            navigate("/login");
          }}>
          Login
        </button>
      </div>
      <div className="title col-3 mx-auto fs-3 text-center">Register</div>
      <div className="welcome col-3 mx-auto text-center">
        Start Your Journey?
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
          <label>
            Email<span className="text-danger">&nbsp;*</span>
          </label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your E-mail"
            required
          />
          <label>
            Password<span className="text-danger">&nbsp;*</span>
          </label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <label>
            Confirm Password<span className="text-danger">&nbsp;*</span>
          </label>
          <input
            type={"password"}
            className="form-control"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            placeholder="Confirm Password"
            required
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
