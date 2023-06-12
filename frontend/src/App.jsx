import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, Forgot, ActivationPage } from "./utils/routes";
import { useSelector, useDispatch } from "react-redux";
import {
  loginRequest,
  loginFail,
  loginSuccess,
  clearError,
} from "./reducers/userSlice";
import { fetchServer } from "./utils/server";
import { toast } from "react-toastify";

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
        dispatch(loginFail(err.response.data));
        toast.error(err.response.data.message);
        dispatch(clearError());
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
