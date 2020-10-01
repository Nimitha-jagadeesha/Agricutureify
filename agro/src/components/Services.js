import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
class Services extends Component {
  render() {
    return(
      
      <div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="home">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Services
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    )
  }
}
export default Services;
