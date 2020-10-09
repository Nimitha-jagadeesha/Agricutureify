import React, { Component, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Select from "react-select";
import options from "./options";
import { addCrop } from "../actions/cropsActions";

const Profile = (props) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const [price, setPrice] = useState("");
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const addcrop = useSelector((state) => state.addcrop);
  console.log(addcrop);
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
  const handleAddCrop = () => {
    if(name&&price)
    dispatch(
      addCrop(
        name,
        price,
        userInfo.firstname,
        pic,
        userInfo._id,
        userInfo.address,
        userInfo.phone
      )
    );
    else
    {
      console.log('All fields are required')
    }
  };
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
                <Select
                required
                  options={options}
                  className="col-6 col-md-5"
                  onChange={(e) => {
                    setName(options[e.value].label);
                    setPic(options[e.value].url);
                    console.log(options[e.value].label);
                  }}
                />
              </div>
              <br />
              <div className="row">
                <label className="col-4 col-md-2 offset-1 offset-md-2">
                  <b>Price expectation in Rs:</b>
                </label>
                <input
                  className="col-6 col-md-5"
                  type="text"
                  placeholder="Enter price"
                  required
                  onChange={(e) => {setPrice(e.target.value)}}
                />
              </div>
              <br />
              <Button className="bg-success" onClick={handleAddCrop}>
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
