import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "./utils/routes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
