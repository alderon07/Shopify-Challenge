import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Location from "./components/Location";
import Inventory from "./components/Inventory";
import ProdToLoc from "./components/ProdToLoc";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="api/location" element={<Location />} />
          <Route path="api/add-product-to-location" element={<ProdToLoc />} />
          <Route path="api/products/create" element={<Product />} />
          <Route path="api/products" element={<Products />}/>
          <Route path="api/inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
