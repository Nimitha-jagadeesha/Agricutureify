import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Profile</BreadcrumbItem>
        </Breadcrumb>

        <div className="container">
          <Card className="row offset-3 col-6">
          <br/>
            <CardImg
              top
              height='50%'
              src={require('../assets/download.jpg')}
              alt="Card image cap"
            />
            <CardBody body className="text-center">
              <CardTitle>
                <h3>Name</h3>
                </CardTitle>
              <CardSubtitle>Farmer/Buyer</CardSubtitle>
              <CardText>
               Address:
              </CardText>
              <Button>Update</Button>
            </CardBody>
          </Card>
          <br/>
        </div>
      </div>
    );
  }
}
