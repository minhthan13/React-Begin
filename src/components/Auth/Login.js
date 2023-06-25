import { useState } from "react";
import "./Login.scss";
const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    alert("login");
  };
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-3 mx-auto">Krantz</div>
      <div className="welcome col-3 mx-auto">Hello, who's this?</div>
      <div className="content-form col-3 mx-auto">
        <div className="form-group ">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span>Forgot Password ?</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
