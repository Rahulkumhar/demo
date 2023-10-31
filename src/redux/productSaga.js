import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:8080/product");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

export function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}
