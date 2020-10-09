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
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Select from 'react-select'
const Profile = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const options = [
    { value: 'wheat', label: 'wheat' },
    { value: 'paddy', label: 'paddy' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  var { userInfo } = userSignin;
  if (!userInfo) {
    userInfo = Cookies.get("userInfo");
    try {
      userInfo = JSON.parse(userInfo);
    } catch (err) {
      userInfo = null;
    }
  }
  if (!userInfo) {
    props.history.push("/login");
    return null;
  }
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Profile</BreadcrumbItem>
      </Breadcrumb>

      <div className="container">
        <br />
        <Card
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CardBody body className="text-center container">
            <h3 class="row">
              <b className="col-6">Name :</b> {userInfo.firstname}
            </h3>
            <CardText className="row">
              <b className="col-6">Type Of Account :</b>
              {userInfo.isFarmer ? "Farmer" : "Buyer"}
            </CardText>
            <CardText className="row">
              <b className="col-6">Email : </b>
              {userInfo.email}
            </CardText>
            <CardText className="row">
              <b className="col-6"> Address : </b>
              {userInfo.address}
            </CardText>
            <CardText className="row">
              <b className="col-6">Phone Number : </b>
              {userInfo.phone}
            </CardText>
            <Button className="bg-primary">
              <i className="fa fa-pencil" />
              {"    "}Edit
            </Button>
          </CardBody>
        </Card>
        <br />
        {userInfo.isFarmer ? (
          <Card
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CardBody body className="text-center container">
              <div className="row">
                <p></p>
              </div>
              <div className="row">
                <label className="col-4 col-md-2 offset-1 offset-md-2">
                  <b>Select the crop :</b>
                </label>
                <Select options={options}  className="col-6 col-md-5" />

              </div>
              <br />
              <div className="row">
                <label className="col-4 col-md-2 offset-1 offset-md-2">
                  <b>Price expectation in Rs:</b>
                </label>
                <input
                  className="col-6 col-md-5"
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name"
                  required
                  onChange={(e) => {
                  }}
                />
              </div>
              <br />
              <Button className="bg-success">
                <i className="fa fa-plus" />
                {"    "}Add crop
              </Button>
            </CardBody>
          </Card>
        ) : null}
      </div>
      <br />
    </div>
  );
};
export default Profile;
