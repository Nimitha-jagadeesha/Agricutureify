import React, { Component } from "react";
import { Card } from "reactstrap";
export class login extends Component {
  render() {
    return (
      <form className="container">
        <br />
        <Card>
          <div className="row">
            <p></p>
          </div>
          <div className="row">
            <label className="col-4 col-md-2 offset-1 offset-md-2">
              First Name :
            </label>
            <input
              className="col-6 col-md-5"
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
          </div>
          <br />
          <div className="row">
            <label className="col-4 col-md-2 offset-1 offset-md-2">
              Last Name :
            </label>
            <input
              className="col-6 col-md-5"
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
          <br />
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
              type="pasword"
              id=" Pasword"
              name=" Confirm Pasword"
              placeholder="Pasword"
            />
          </div>
          <br />
          <div className="row">
            <label className="col-4 col-md-2 offset-1 offset-md-2">
              Confirm Pasword :
            </label>
            <input
              className="col-6 col-md-5"
              type="pasword"
              id="email"
              name=" Confirm Pasword"
              placeholder=" Confirm Pasword"
            />
          </div>
          <br />

          <div className="row">
            <label className="col-4 col-md-2 offset-1 offset-md-2">
              Address :
            </label>
            <textarea
              className="col-6 col-md-5"
              id="subject"
              name="subject"
              placeholder="Write something.."
            ></textarea>
            <br />
            <br />
          </div>
          <br />
        </Card>
        <br />
        <input className="offset-6" type="submit" value="Submit" />
      </form>
    );
  }
}

export default login;
