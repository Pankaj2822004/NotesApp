import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("signup-page");

    return () => {
      document.body.classList.remove("signup-page");
    };
  }, []);
 

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form style={{ margin: "47px 150px" }}>
      <h1 className="my-3 textAlign: center"> Signup Page</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
        <h6>Name</h6>
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          onChange={onChange}
          id="name"
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
         <h6>Email</h6>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={onChange}
          aria-describedby="emailHelp"
          minLength={5}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
         <h6>Password</h6>
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={onChange}
          id="password"
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputcPassword1" className="form-label">
          {" "}
        <h6>Confirm Password</h6>
        </label>
        <input
          type="cpassword"
          className="form-control"
          name="cpassword"
          onChange={onChange}
          id="cpassword"
          minLength={5}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signup;
