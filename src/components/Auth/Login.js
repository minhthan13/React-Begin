import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
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
    setIsLoading(true);
    //submit apis
    let res = await postLogin(email, password);
    if (res && res.EC === 0) {
      dispatch(doLogin(res));
      toast.success(res.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          onClick={() => {
            navigate("/register");
          }}>
          Sign Up
        </button>
      </div>
      <div className="title col-3 mx-auto">Krantz</div>
      <div className="welcome col-3 mx-auto">Hello, who's this?</div>
      <div className="content-form col-3 mx-auto">
        <div className="form-group ">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>Forgot Password ?</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}>
            {isLoading && <ImSpinner10 className="loaderIcon" />}
            <span>login</span>
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}>
            &#60;&#60; Go To Homepage
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
