import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productListData = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [...action.data];
    default:
      return data;
  }
};