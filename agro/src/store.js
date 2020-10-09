import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { addCropReducer, cropListReducer, deleteCropReducer } from "./reducer/cropListReducer";
import thunk from "redux-thunk";
import { userRegisterReducer, userSigninReducer } from "./reducer/userReducer";
const initialState = {};
const reducer = combineReducers({
  cropList: cropListReducer,
  userSignin: userSigninReducer,
  resgister: userRegisterReducer,
  addcrop:addCropReducer,
  deletecrop:deleteCropReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
