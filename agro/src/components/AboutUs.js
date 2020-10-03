import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
const image1 = require("../assets/download.jpg");

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="home">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            About Us
          </BreadcrumbItem>
        </Breadcrumb>
        <Media className='container'>
          <Media left href="#">
            <img src={image1}></img>
          </Media>
          <Media body  className='offset-1'>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  }
}
export default AboutUs;
