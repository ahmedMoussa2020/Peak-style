import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
