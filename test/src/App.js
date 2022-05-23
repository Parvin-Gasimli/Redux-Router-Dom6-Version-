import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"
import Home from "./compontnes/Home";
import About from "./compontnes/About";
import Products from "./compontnes/Products";
import Error from "./compontnes/Error";
import Shared from "./compontnes/Shared";
import "./index.css"
import SingleProduct from "./compontnes/SingleProduct";

function App() {
  return (
    <BrowserRouter>
    <nav>

    </nav>

     <Routes>
     <Route path="/" element={<Shared/>} >
       <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<SingleProduct/>} />
        <Route path="*" element={<Error />} />


      </Route>
      {/* <Route path="dashboard" element={<div>DashBoard</div>} >
        <Route path="status"  element={<div>status</div>}  />
      </Route> */}
     </Routes>

    </BrowserRouter>
  );
}

export default App;
