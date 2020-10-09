import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Card,
  Media,
  Spinner,
} from "reactstrap";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import options from "./options";
import Select from "react-select";

const Services = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  var { userInfo } = userSignin;
  if (!userInfo) {
    userInfo = Cookies.get("userInfo");
    try {
      userInfo = JSON.parse(userInfo);
    } catch (err) {
      userInfo = null;
    }
  }
  const cropList = useSelector((state) => state.cropList);
  const { Data, loading, error } = cropList;
  const renderList = !loading ? (
    Data.map((x) => {
      return (
        <div>
          <Card className="container">
            <Media className="row">
              <Media left href="#" className="col-md-3 col-12">
                <img src={x.pic} width="100%" />
              </Media>
              <Media body className="col-8">
                <Media heading className="text-center">
                  <strong>Crop :</strong> {x.name}
                </Media>
                <Media className="row">
                  <strong className="col-md-3 col-6 offset-1">Price per Kg:</strong>{" "}
                  <div className="col-md-8 col-5">{x.price}</div>
                </Media>
                <Media className="row">
                  <strong className="col-md-3 col-6 offset-1">Owner :</strong>{" "}
                  <div className="col-md-8 col-5">{x.owner}</div>
                </Media>
                <Media className="row">
                  <strong className="col-md-3 col-6 offset-1">
                    Phone Number :
                  </strong>{" "}
                  <div className="col-md-8 col-5">{x.ownerphone}</div>
                </Media>
                <Media className="row">
                  <strong className="col-md-3 col-6 offset-1">Address :</strong>{" "}
                  <div className="col-md-8 col-5">{x.owneraddress}</div>
                </Media>
                <Media muted className="row">
                  <strong className="col-md-3 col-6 offset-1">
                    Last Update On:
                  </strong>{" "}
                  <div className="col-md-8 col-5">
                    {Date(x.createdAt).toString()}
                  </div>
                </Media>
              </Media>
            </Media>
          </Card>
          <br />
        </div>
      );
    })
  ) : (
    <Spinner color="primary" className="offset-5" />
  );

  if (!userInfo) {
    props.history.push("/login");
  }
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
        <div className="row offset-3">
          <InputGroupText className="col-md-1 col-2">
            <span className="fa fa-search" />
          </InputGroupText>
          <Select
            options={options}
            className="col-8 col-md-8 search"
            placeholder="Search"
            onChange={(e) => {
              console.log(e.value);
            }}
          />
        </div>
      </div>
      <br />
      <div className="container">{renderList}</div>
    </div>
  );
};
export default Services;
