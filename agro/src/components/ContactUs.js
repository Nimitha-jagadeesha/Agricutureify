import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Row,
  Col,
} from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>Contact Us</h3>
              <hr />
            </div>
          </div>

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
            <br/>
            <input  className="offset-6" type="submit" value="Submit" />
          </form>

          <div className="row row-content">
            <div className="col-12">
              <h3>Location Information</h3>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h5>Our Address</h5>
              <address>
                100 ft.road near church
                <br />
                Indiranagar
                <br />
                BANGLORE
                <br />
                <i className="fa fa-phone"></i>: +896 2589 3699
                <br />
                <i className="fa fa-fax"></i>: +896 78549632
                <br />
                <i className="fa fa-envelope"></i>:{" "}
                <a href="mailto:agroconnect@email.com">agroconnect@email.com</a>
              </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
              <h5>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
              <div className="btn-group" role="group">
                <a
                  role="button"
                  className="btn btn-primary"
                  href="tel:+85212345678"
                >
                  <i className="fa fa-phone"></i> Call
                </a>
                <a role="button" className="btn btn-info">
                  <i className="fa fa-skype"></i> Skype
                </a>
                <a
                  role="button"
                  className="btn btn-success"
                  href="mailto:confusion@food.net"
                >
                  <i className="fa fa-envelope-o"></i> Email
                </a>
              </div>
            </div>
          </div>
          <div className="row row-content">
            <div className="col-12">
              <h3>Send us your Feedback</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
