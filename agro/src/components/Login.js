import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Spinner } from "reactstrap";
import { signin } from "../actions/userAction";


function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(()=>{
    if(userInfo){
      props.history.push('/services');
    }
    return () =>{

    }
  },[userInfo])
  return (
    <form className="container" onSubmit={submitHandler}>
      <br />
      <Card>
        <h2 className="offset-5">Login</h2>
        
        {loading && <Spinner color="primary" className="offset-5" />}
        {error&&<div className="text-center" style={{color:"red"}}>{error}</div>}
        <div className="row">
          <p></p>
        </div>
        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">Email :</label>
          <input
            className="col-6 col-md-5"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />

        <div className="row">
          <label className="col-4 col-md-2 offset-1 offset-md-2">
            Pasword :
          </label>
          <input
            className="col-6 col-md-5"
            type="password"
            id=" Pasword"
            name=" Confirm Pasword"
            placeholder="Pasword"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <Link to="/register" className="col-12 text-center">
          New to Agriculturify?
        </Link>
        <br />
        <input
          className="offset-5 col-3 bg-primary"
          type="submit"
          value="Submit"
          required
          style={{ color: "white" }}
        />
      </Card>
      <br />
    </form>
  );
}
export default Login;
