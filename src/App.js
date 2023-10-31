import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { productList } from "./redux/ProductAction";
import Counter from "./components/counter";

function App() {
  const counterRes = useSelector((state) => state.productListData);
  console.log("App js parent component", counterRes);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="flex">
        <Counter />
        <button
          className="button-product"
          onClick={() => dispatch(productList())}
        >
          {" "}
          Get Product card
        </button>
      </div>
    </div>
  );
}

export default App;
