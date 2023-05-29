import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Forgot, ActivationPage } from "./utils/routes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/forgot-password' element={<Forgot />} />
        <Route
          path='/activate/:activation_token'
          element={<ActivationPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
