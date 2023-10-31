import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCount, emptyToCount, removedToCount } from "../redux/action";

const Counter = () => {
  const counterRes = useSelector((state) => state.countData);
  console.log("count", counterRes);
  const dispatch = useDispatch();
  const product = {
    id: 1,
    name: "abc",
    age: "xyz",
    number: "1234567890",
  };
  return (
    <>
      <div className="App-header">
        <h1> {counterRes.length} </h1>
      </div>
      <button
        className="button-add"
        onClick={() => dispatch(addToCount(product))}
      >
        {" "}
        +{" "}
      </button>{" "}
      <button
        className="button-delete"
        onClick={() => dispatch(removedToCount(product.name))}
      >
        {" "}
        -{" "}
      </button>
      <button className="button-empty" onClick={() => dispatch(emptyToCount())}>
        {" "}
        empty{" "}
      </button>
    </>
  );
};

export default Counter;
