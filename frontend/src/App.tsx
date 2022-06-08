import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Location from "./components/Location";
import Inventory from "./components/Inventory";
import ProdToLoc from "./components/ProdToLoc";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/products" element={<Product />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/add-product-to-location" element={<ProdToLoc />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
