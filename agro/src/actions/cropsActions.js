import {
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
export { listCrops };
