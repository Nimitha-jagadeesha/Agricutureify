import {
  CROP_LIST_REQUEST,
  CROP_LIST_SUCESS,
  CROP_LIST_FAIL,
} from "../constants/cropConstant";

function cropListReducer(state = { Data: [] }, action) {

    switch (action.type) {
    case CROP_LIST_REQUEST:
      return { loading: true, Data: [] };
    case CROP_LIST_SUCESS:
      return { loading: false, Data: action.payload };
    case CROP_LIST_FAIL:
      return { loading: false, error: action.payload, Data: [] };
    default:
      return state;
  }
}
export { cropListReducer };
