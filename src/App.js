import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Hedear from "./components/Hedear/Hedear";
import OrderReview from "./components/OrderReview/OrderReview";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
  return (
    <div className="App">
      <Hedear></Hedear>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/orderreview"
          element={<OrderReview></OrderReview>}
        ></Route>
        <Route path="/grandpa" element={<Grandpa></Grandpa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
