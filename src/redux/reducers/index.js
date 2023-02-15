import { combineReducers } from "redux";
import { reducer as reduxformReducer } from "redux-form";
import changeThemeReducer from './changeThemeReducer';
import getAllProdsReducer from "./getAllProdsReducer"


export default combineReducers({
  form: reduxformReducer,
  themeType:changeThemeReducer,
  products:getAllProdsReducer
});
