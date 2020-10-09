import axios from "axios";
import Cookie from "js-cookie";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/users/signIn", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message});
  }
};

const register = (
  firstname,
  lastname,
  password,
  email,
  address,
  phone,
  isFarmer
) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: { firstname, lastname, password, email, address, phone, isFarmer },
  });
  try {
    const { data } = await axios.post("/users/register", {
      firstname,
      lastname,
      password,
      email,
      address,
      phone,
      isFarmer,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: "You have already created your account",
    });
  }
};
export { signin, register };
