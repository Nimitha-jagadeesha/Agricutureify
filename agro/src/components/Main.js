import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from './Footer'
import ContactUs from './ContactUs'
import Services from './Services'
import AboutUs from './AboutUs' 
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/services" component={Services} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path ="/login" component={Login}/>
          <Route path ="/register" component={Register}/>
          <Route path ="/profile" component={Profile}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;