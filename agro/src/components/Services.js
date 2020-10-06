import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Card,
  Media,
} from "reactstrap";
import axios from "axios";
function Services() {
  const [Data, setData] = useState([]);
  const renderList = Data
    ? Data.map((x) => {
        return (
          <div>
            <Card className="container">
              <Media className="row">
                <Media left href="#" className="col-md-3 c01-12">
                  <img src={x.pic} width="100%" />
                </Media>
                <Media body className="col-8">
                  <Media heading><strong>Crop :</strong> {x.name}</Media>
                  <Media ><strong>Price :</strong> {x.price}</Media>
                  <Media ><strong>Owner :</strong> {x.owner}</Media>
                  <Media ><strong>Phone Number :</strong> {x.ownerphone}</Media>
                  <Media ><strong>Address :</strong> {x.owneraddress}</Media>

                  <Media muted>
                    <strong>Last Update On:</strong>{Date(x.createdAt).toString()}
                  </Media>
                </Media>
              </Media>
            </Card>
            <br />
          </div>
        );
      })
    : null;
  useEffect(() => {
    const fetchedData = async () => {
      const { data } = await axios.get("/data");
      setData(data);
      console.log(Data);
    };
    fetchedData();
  }, []);

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
          <Input placeholder="Search crop" />
        </InputGroup>
      </div>
      <br />
      <div className="container">{renderList}</div>
    </div>
  );
}
export default Services;
