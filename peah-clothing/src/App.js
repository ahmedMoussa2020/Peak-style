import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication";
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Shop from "./routes/Shop";


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
