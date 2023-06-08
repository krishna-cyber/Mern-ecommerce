import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Forgot, ActivationPage } from "./utils/routes";
import { fetchServer } from "./utils/server";
import { toast } from "react-toastify";

const App = () => {
  useEffect(() => {
    fetchServer
      .get("/")
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);
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
