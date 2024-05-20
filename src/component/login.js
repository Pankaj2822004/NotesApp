import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const Login = (props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("login-page");

    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form  style={{ margin: "46px 152px" }}>
      <h1 className="my-3 textAlign: center" style={{ color: "black" }}>
        {" "}
        Login Page
      </h1>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label"
          style={{ color: "black" }}
        >
          <h4>Email Adress</h4>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={onChange}
          value={credentials.email}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          <h4>Password</h4>
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={onChange}
          value={credentials.password}
          id="password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
