import React, { useState } from "react";

import "./LoginUser.css";

const LoginUser = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <div className="text-primary">
      <h1>
        Account <span>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default LoginUser;
