import React, { Component, useState } from "react";
import { Card, Alert } from "reactstrap";
function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isFarmer, setisFarmer] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const submitHandler = (e) => {
    console.log(password)
    if (password.length <= 5) {
      setPassword("")
      setMsg("Password should be more than 5 characters");
    } else if (password === confirmpassword) {
      setMsg("");

    } else {
      setMsg("Password and confirm password must be same");

    }
    e.preventDefault();

  };
  const setGender = (event) => {
    console.log(event.target.value);
    if(event.target.value==='Farmer')
            setisFarmer(true);
  };
  return (
    <form className="container" onSubmit={submitHandler}>
      <br />
      <Card>
      {msg ? (
        <Alert color="danger">{msg}</Alert>
      ) : null}
        <h2 className="offset-5">Register</h2>
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
            onChange={(e)=>{setFirstname(e.target.value)}}
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
            onChange={(e)=>{setLastname(e.target.value)}}
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
            onChange={(e)=>{setEmail(e.target.value)}}
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
            onChange={(e)=>{setPhone(e.target.value)}}
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
            onChange={(e)=>{setPassword(e.target.value)}}
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
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
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
            onChange={(e)=>{setAddress(e.target.value)}}
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
