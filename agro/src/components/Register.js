import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Alert, Spinner } from "reactstrap";
import { register } from "../actions/userAction";
function Register(props) {
  const dispatch = useDispatch();
  const resgister = useSelector((state) => state.resgister);
  const { loading, userInfo, error } = resgister;
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isFarmer, setisFarmer] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (userInfo) {
      props.history.push("/services");
    }
    return () => {};
  }, [userInfo]);
  const submitHandler = (e) => {
    console.log(password);
    if (password.length <= 5) {
      setPassword("");
      setMsg("Password should be more than 5 characters");
    } else if (password === confirmpassword) {
      dispatch(
        register(firstname, lastname, password, email, address, phone, isFarmer)
      );
    } else {
      setMsg("Password and confirm password must be same");
    }
    e.preventDefault();
  };
  const setGender = (event) => {
    console.log(event.target.value);
    if (event.target.value === "Farmer") setisFarmer(true);
  };
  return (
    <form className="container" onSubmit={submitHandler}>
      <br />
      <Card>
        {msg ? <Alert color="danger">{msg}</Alert> : null}
        <h2 className="offset-5">Register</h2>

        {loading && <Spinner color="primary" className="offset-5" />}
        {error && (
          <div className="text-center" style={{ color: "red" }}>
            {error}
          </div>
        )}
        <div className="row">
          <p></p>
        </div>
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            <b>First Name :</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name"
            required
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            <b>Last Name :</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name"
            required
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            <b>Email</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            <b>Phone Number</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            <b>Pasword :</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="password"
            id=" Pasword"
            name=" Confirm Pasword"
            placeholder="Pasword"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2" required>
            <b>Confirm Pasword :</b>
          </label>
          <input
            className="col-6 col-md-5"
            type="password"
            id="email"
            name=" Confirm Pasword"
            placeholder=" Confirm Pasword"
            required
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2" required>
            <b>Address :</b>
          </label>
          <textarea
            className="col-6 col-md-5"
            id="subject"
            name="subject"
            placeholder="Address"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></textarea>
          <br />
          <br />
        </div>
        <br />
        <div className="row">
          <label className="col-4 offset-1">
            <b>Select the account you want to create</b>
          </label>
          <div onChange={setGender.bind(this)} className="col-7 row">
            <div className="col-6">
              <input type="radio" value="Farmer" name="gender" />
              Farmer
            </div>
            <div className="col-6">
              <input type="radio" value="Buyer" name="gender" required /> Buyer
            </div>
          </div>
        </div>
        <br />
        <Link to="/login" className="col-12 text-center">
          Have an account?
        </Link>
        <br />
        <input
          className="offset-5 col-3 bg-primary"
          type="submit"
          value="Submit"
          required
          style={{ color: "white" }}
        />
      </Card>
      <br />
      <br />
    </form>
  );
}

export default Register;
