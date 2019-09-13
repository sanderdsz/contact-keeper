import React, { useState } from "react";

import "./RegisterUser.css";

const RegisterUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Register submit");
  };

  return (
    <div className="text-primary">
      <h1>
        Account <span>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <div>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
            ></input>
          </div>
        </div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterUser;
