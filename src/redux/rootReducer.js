import { combineReducers } from "redux";
import { countData } from "./reducer";
import { productListData } from "./ProductReducer";

export default combineReducers({
  countData,
  productListData,
});
