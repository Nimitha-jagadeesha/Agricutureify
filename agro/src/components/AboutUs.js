import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
import "../css/AboutUs.css";
const image1 = require("../assets/aboutus.jpeg");

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Breadcrumb >
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>

        <div className="container">
          <img src={image1} alt="Norway" style={{width:'100%',height:'450px'}} />
          
        </div>
        <div>
          <button className="accordion">Farmers</button>
          <div className="panel">
            <p>
              here we will add about the farmers info after updating services
            </p>
          </div>

          <button className="accordion">Buyers</button>
          <div className="panel">
            <p>
              here we will add about the buyers info after updating services
            </p>
          </div>

          <button className="accordion">others</button>
          <div className="panel">
            <p>
              here we will add some other extra info after updating services
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
