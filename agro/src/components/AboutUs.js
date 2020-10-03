import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
import './AboutUs.css';
const image1 = require("./assets/download.jpg");

class AboutUs extends Component {
  render() {
    return (
      
      <div >
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="row-content" >
            <img src={image1} alt="Snow" width="10%" heigh="10%"></img>
               <div class="bottom-left">
    
    <p>AgroConnect promotes eBusiness</p>
  </div>
        </div>
        <div>
          <button class="accordion">Farmers</button>
          <div class="panel">
            <p>here we will add about the farmers info after updating services</p>
          </div>

          <button class="accordion">Buyers</button>
          <div class="panel">
          <p>here we will add about the buyers info after updating services</p>
          </div>

          <button class="accordion">others</button>          
          <div class="panel">
          <p>here we will add some other extra  info after updating services</p>
          </div>
        </div>

      
      </div>
    );
  }
}
export default AboutUs;