/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { activationServer } from "../utils/server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [err, setErr] = useState("");

  //activate user account
  const activate = (activation_token) => {
    //making correct activation token by implementing dot to underscore
    const token = activation_token.replace(/\+/g, ".");
    console.log(token);

    activationServer
      .post("/", { token })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErr(err);
      });
  };

  useEffect(() => {
    if (activation_token) {
      activate(activation_token);
    }
  }, [activation_token]);
  return (
    <section className=' h-screen w-screen flex justify-center items-center'>
      {err ? (
        <p className=' font-semibold'>
          {" "}
          ⚠️ Token expires or Something went wrong during validation ⚠️
        </p>
      ) : (
        <p className=' font-semibold text-md'>
          Your account has been activated. You can now{" "}
          <Link to={"/login"} className=' text-blue-500 underline'>
            Login
          </Link>{" "}
          to your account.
        </p>
      )}
    </section>
  );
};

export default ActivationPage;
