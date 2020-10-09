import {
  ADD_CROP_FAIL,
  ADD_CROP_REQUEST,
  ADD_CROP_SUCCESS,
  CROP_LIST_FAIL,
  CROP_LIST_REQUEST,
  CROP_LIST_SUCESS,
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
export { listCrops,addCrop };
