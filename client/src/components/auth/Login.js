import axios from "axios";
import React, { useContext, useState } from "react";
import {useHistory} from 'react-router-dom';

function Login() {
  let history= useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/login", loginData);
      await axios.post(
        "http://localhost:3000/api/auth/login",
        loginData
      );
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>
      <form onSubmit={login}>
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
        <button type="submit" onClick={()=> history.push('"/"')}>Log in</button>
      </form>
    </div>
  );
}

export default Login;
