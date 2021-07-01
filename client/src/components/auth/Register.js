import axios from "axios";
import React, { useContext, useState } from "react";
import {useHistory} from 'react-router-dom';

function Register() {
  let history= useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        name,
        email,
        password,
        
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(
        "http://localhost:3000/api/auth/register", registerData
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input
          type="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        
        <button type="submit" onClick={()=> history.push("/CourseModel")} >Register</button>
      </form>
    </div>
  );
}

export default Register;
