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

          <div className="row row-content">
            <div className="col-12">
              <h2>Location Information</h2>
            </div>
            <div className="col-12 col-sm-4 offset-sm-1">
              <h3>Our Address</h3>
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
          
        </div>
      </div>
    );
  }
}

export default Contact;
