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

const Profile = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userInfo)
  if (!userInfo) {
    props.history.push("/login");
    return null
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
        <Card className="row offset-3 col-6">
          <br />
          <CardImg
            top
            height="50%"
            src={require("../assets/download.jpg")}
            alt="Card image cap"
          />
          <CardBody body className="text-center">
            <CardTitle>
              <h3>Name : {userInfo.firstname}</h3>
            </CardTitle>
            <CardSubtitle>
              {userInfo.isFarmer ? "Farmer" : "Buyer"}
            </CardSubtitle>
            <CardText>Email : {userInfo.email}</CardText>
            <CardText>Address:{userInfo.address}</CardText>
            <CardText>Phone Number{userInfo.phone}</CardText>
            <Button>Update:</Button>
          </CardBody>
        </Card>
        <br />
      </div>
    </div>
  );
};
export default Profile;
