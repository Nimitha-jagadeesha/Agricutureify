import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardFooter,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

const data = [
  {
    crop: "Crop Name",
    img: "../assets/download.jpg",
    price: "3000",
  },
  {
    crop: "Crop Name",
    img: "../assets/download.jpg",
    price: "3000",
  },
  {
    crop: "Crop Name",
    img: "../assets/download.jpg",
    price: "3000",
  },
  {
    crop: "Crop Name",
    img: "../assets/download.jpg",
    price: "3000",
  },
];
const renderList = data.map((x) => {
  return (
    <div>
      <Card className="row">
        <Media className="container">
          <Media left href="#">
            <img src={x.img}></img>
          </Media>
          <Media body className="offset-1">
            <Media heading>{x.crop}</Media>
            {x.price}
          </Media>
        </Media>
      </Card>
      <br />
    </div>
  );
});
class Services extends Component {
  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="home">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Services
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="container">
          <InputGroup className="offset-3 col-8">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <span className="fa fa-search" />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Search" />
          </InputGroup>
        </div>
        <br />
        <div className="container">{renderList}</div>
      </div>
    );
  }
}
export default Services;
