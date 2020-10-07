import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { signin } from '../actions/userActions';
import { Card } from "reactstrap";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = null;
  const error = null;
  const redirect = "";
  const submitHandler = () => {};
  return (
    <form className="container">
      <br />
      <Card>
        <h2 className="offset-5">Login-In</h2>
        <div className="row">
          <p></p>
        </div>
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">Email</label>
          <input
            className="col-6 col-md-5"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <br />

        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            Pasword :
          </label>
          <input
            className="col-6 col-md-5"
            type="password"
            id=" Pasword"
            name=" Confirm Pasword"
            placeholder="Pasword"
          />
        </div>
        <br />
      </Card>
      <br />
      <input className="offset-6" type="submit" value="Submit" />
    </form>
  );
}
export default Login;
