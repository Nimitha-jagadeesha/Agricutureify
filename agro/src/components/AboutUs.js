import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
import "../css/AboutUs.css";
import { Accordion, Card, Button } from "react-bootstrap";
const image1 = require("../assets/AboutUs.jpg");

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="container">
          <img
            className="offset-3 col-6"
            src={image1}
            alt="Norway"
            style={{ width: "100%", height: "100%" }}
          />
          <h4 className="centered">
            <strong>connecting farmers and buyers to transact freely and fairly with each other by breaking down the financial, communication and marketing barriers of brokers, sales agents, and other intermediaries that generate profits by separating agricultural producers, wholesale buyers and consumers.</strong>
          </h4>
        </div>
          <Accordion defaultActiveKey="0" style={{padding:'0px'}}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Farmers
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  here we will add about the farmers info after updating
                  services
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Buyers
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  here we will add about the buyers info after updating services
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
    );
  }
}
export default AboutUs;
