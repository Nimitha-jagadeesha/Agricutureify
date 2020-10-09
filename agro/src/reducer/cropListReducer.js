import {
  CROP_LIST_REQUEST,
  CROP_LIST_SUCESS,
  CROP_LIST_FAIL,
  ADD_CROP_REQUEST,
  ADD_CROP_SUCCESS,
  ADD_CROP_FAIL,
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

function addCropReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CROP_REQUEST:
      return { loading: true };
    case ADD_CROP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ADD_CROP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export { cropListReducer, addCropReducer };
