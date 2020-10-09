import React, { Component, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { listCrops } from "../actions/cropsActions";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchedData = async () => {
      dispatch(listCrops());
    };
    fetchedData();
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/services" component={Services} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/home" />
      </Switch>
      <br/>
      <Footer />
    </div>
  );
};

export default Main;
