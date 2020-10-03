import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
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
      </div>
    );
  }
}
export default Services;