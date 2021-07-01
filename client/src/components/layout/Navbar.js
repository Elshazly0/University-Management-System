import React, { useContext } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  //const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/register">  Register </Link>
      <Link to="/login"> Log in </Link>     
    </div>
  );
}

export default Navbar;
