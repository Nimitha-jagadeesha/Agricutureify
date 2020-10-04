import React, { Component } from "react";

export class login extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <label className="col-4 col-md-2 offset-1 offset-md-3">
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
            <label className="col-4 col-md-2 offset-1 offset-md-3">
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

          <label className="col-4 col-md-2 offset-1 offset-md-3">Email</label>
          <input
            className="col-6 col-md-5"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
          <br />

          <label className="col-4 col-md-2 offset-1 offset-md-3">
            Subject :
          </label>
          <textarea
            className="col-6 col-md-5"
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>
          <br />
          <br />
          <input className="offset-6" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default login;
