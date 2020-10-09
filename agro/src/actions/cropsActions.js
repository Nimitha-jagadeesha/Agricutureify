import {
  ADD_CROP_FAIL,
  ADD_CROP_REQUEST,
  ADD_CROP_SUCCESS,
  CROP_LIST_FAIL,
  CROP_LIST_REQUEST,
  CROP_LIST_SUCESS,
  DELETE_CROP_FAIL,
  DELETE_CROP_REQUEST,
  DELETE_CROP_SUCCESS,
} from "../constants/cropConstant";
import axios from "axios";

const listCrops = () => async (dispatch) => {
  try {
    dispatch({ type: CROP_LIST_REQUEST });
    const { data } = await axios.get("/data");
    dispatch({ type: CROP_LIST_SUCESS, payload: data });
  } catch (err) {
    dispatch({ type: CROP_LIST_FAIL, payload: err.message });
  }
};

const addCrop = (
  name,
  price,
  owner,
  pic,
  ownerid,
  owneraddress,
  ownerphone
) => async (dispatch) => {
  dispatch({
    type: ADD_CROP_REQUEST,
    payload: { name, price, owner, pic, ownerid, owneraddress, ownerphone },
  });
  try {
    const { data } = await axios.post("/send-data", {
      name,
      price,
      owner,
      pic,
      ownerid,
      owneraddress,
      ownerphone,
    });
    dispatch({ type: ADD_CROP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_CROP_FAIL, payload: error.message });
  }
};

const deleteCrop = (id) => async (dispatch) => {
  console.log(id);
  dispatch({
    type: DELETE_CROP_REQUEST,
    payload: { id },
  });
  try {
    const { data } = await axios.post("/delete", {
      id,
    });
    dispatch({ type: DELETE_CROP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_CROP_FAIL, payload: error.message });
  }
};
export { listCrops, addCrop, deleteCrop };
