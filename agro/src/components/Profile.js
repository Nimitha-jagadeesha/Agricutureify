import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Card,
  CardText,
  CardBody,
  Button,
  Alert,
  Spinner,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Select from "react-select";
import options from "./options";
import { addCrop, deleteCrop } from "../actions/cropsActions";
const Profile = (props) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const [price, setPrice] = useState("");
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const addcrop = useSelector((state) => state.addcrop);
  const { loading1, data } = addcrop;
  const cropList = useSelector((state) => state.cropList);
  const { Data, loading, error } = cropList;
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

  const handleDelete = (x) =>{
     dispatch(deleteCrop(x._id))
     alert('Deleted Sucessfully')
     window.location.reload(false);
  }
  const renderList = !loading
    ? Data.map((x) => {
        if (x.ownerid === userInfo._id)
          return (
            <div>
              <Card className="container">
                <Media className="row">
                  <Media left href="#" className="col-md-3 col-12" style={{margin: 30}}>
                    <img src={x.pic} width="100%" height="100%"/>
                  </Media>
                  <Media body className="col-8">
                    <Media heading className="text-center">
                      <strong>Crop :</strong> {x.name}
                    </Media>
                    <Media className="row">
                      <strong className="col-md-3 col-6 offset-1">
                        Price per KG:
                      </strong>{" "}
                      <div className="col-md-8 col-5">{x.price}</div>
                    </Media>
                    <Media className="row">
                      <strong className="col-md-3 col-6 offset-1">
                        Owner :
                      </strong>{" "}
                      <div className="col-md-8 col-5">{x.owner}</div>
                    </Media>
                    <Media className="row">
                      <strong className="col-md-3 col-6 offset-1">
                        Phone Number :
                      </strong>{" "}
                      <div className="col-md-8 col-5">{x.ownerphone}</div>
                    </Media>
                    <Media className="row">
                      <strong className="col-md-3 col-6 offset-1">
                        Address :
                      </strong>{" "}
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
                <Button className="bg-danger col-md-2 col-4 offset-4 offset-md-5" onClick={()=>{handleDelete(x)}}><i className="fa fa-trash"/> Delete</Button>
              </Card>
              <br />
            </div>
          );
      })
    : null;
  const handleAddCrop = () => {
    if (name && price) {
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
    } else {
      alert("All fields are required");
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
          </CardBody>
        </Card>
        <br />
        {userInfo.isFarmer ? (
          <div>
            <Card
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {data ? (
                <Alert color="success" className="text-center">
                  Added sucessfully
                </Alert>
              ) : null}

              {loading1 && <Spinner color="primary" className="offset-5" />}
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
                    }}
                  />
                </div>
                <br />
                <div className="row">
                  <label className="col-4 col-md-2 offset-1 offset-md-2">
                    <b>Price expectation in Rs/Kg:</b>
                  </label>
                  <input
                    className="col-6 col-md-5"
                    type="text"
                    placeholder="Enter price"
                    required
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
                <br />
                <Button className="bg-success" onClick={handleAddCrop}>
                  <i className="fa fa-plus" />
                  {"    "}Add crop
                </Button>
              </CardBody>
            </Card>
            <br />
            <div className="container">
              <h1 className="text-center">Your Crops</h1>
              {renderList}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
