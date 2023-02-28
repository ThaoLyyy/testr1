import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    setEmail("");
    setPassword("");

    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }

    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }

    setErrors(errorObj);

    if (error) return;
  };

  return (
    <section>
      <div className="login">
        <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
          <h1>Login</h1>
          <p>Hi, we are you glad you are back. Please login.</p>
        {/* <div className="form_data"> */}
          <div className="form_input">
            <label htmlFor="name">Name:</label>
            <div className="form_input-is-text">
              <input
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {errors.name && <div className="errors">{errors.name}</div>}
          </div>

          <div className="form_input">
            <label htmlFor="email">Email:</label>
            <div className="form_input-is-text">
              <input
                name="email"
                id="email"
                type="email"
                value={email}
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div className="form_input">
            <label htmlFor="password">Password:</label>
            <div>
              <input
                name="password"
                id="password"
                type="password"
                value={password}
                placeholder="Enter Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errors.password && <div className="errors">{errors.password}</div>}
          </div>
          <button type="submit" className="submit__btn">
            Submit
          </button>
          {/* </div> */}
        </form>
      </div>
    </section>
  );
};

export default Login;
