import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("Fill the all details!");
    } else if (!name) {
      setErr("Enter your name!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      axios.post("http://localhost:8000/registration", {
        name: name,
        email: email,
        password: password,
      });
      setErr("");
      navigate("/");
    }
  };

  return (
    <div className="reg">
      <div id="singup">
        <div className="singup">
          <h2>Create a account!</h2>
          <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <p>{err}</p>
          <button onClick={handleSubmit}>Singup</button>
          <Link to="/login">You have already account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
