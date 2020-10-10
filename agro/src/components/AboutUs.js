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
            <strong>Connecting farmers and buyers to transact freely and fairly with each other by breaking down the financial, communication and marketing barriers of brokers, sales agents, and other intermediaries that generate profits by separating agricultural producers, wholesale buyers and consumers.</strong>
          </h4>
        </div>
          <Accordion defaultActiveKey="0" style={{padding:'0px'}}>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <strong>Farmers</strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                <strong>
                Here we connect farmers to end consumers directly and help each other trade the grains at much better rates. It ensures that farmers get the fair rate of their produce. In online mode, the farmer will complete the obligations of delivering the product to the customer himself. Our website does NOT act as a middleman because for every product the contact 
                information is displayed by the farmer only and we do not buy from the farmers and sell it to customers.
                </strong>
                  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  <strong> Buyers</strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                <strong>
                The intervention of many middlemen in the supply chain is not exploiting farmers only but also the consumers, Retailers, and to some extent wholesalers as well. Here they the best quality grains at the best price as compared to what they buy from supermarkets where buyers will have to just log in to the website and get connected to the farmers directly.
                </strong>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
    );
  }
}
export default AboutUs;
