/** @format */

import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Home,
  Forgot,
  ActivationPage,
  Faq,
  Products,
  Events,
  Profile,
} from "./utils/routes";
import { useSelector, useDispatch } from "react-redux";
import {
  loginRequest,
  loginFail,
  loginSuccess,
  clearError,
} from "./reducers/userSlice";
import { fetchServer } from "./utils/server";
import { toast } from "react-toastify";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginRequest());
    fetchServer
      .get("/")
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(loginFail(err.response));
        toast.error(err.response);
        dispatch(clearError());
      });
  }, []);
  return (
    <div className=' bg-[#F6F6F5]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/forgot-password' element={<Forgot />} />
        <Route path='/products' element={<Products />} />
        <Route path='/events' element={<Events />} />
        <Route path='/product/:name' element={<ProductDetails />} />
        <Route
          path='/activate/:activation_token'
          element={<ActivationPage />}
        />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
