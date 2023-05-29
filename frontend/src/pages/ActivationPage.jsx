import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ActivationPage = () => {
  const { activation_token } = useParams();

  useEffect(() => {
    if (activation_token) {
      console.log(activation_token);
    }
  }, [activation_token]);
  return (
    <section className=' h-screen w-screen flex justify-center items-center'>
      <p className=' font-semibold text-md'>
        Your account has been activated. You can now{" "}
        <Link to={"/login"} className=' text-blue-500 underline'>
          Login
        </Link>{" "}
        to your account.
      </p>
    </section>
  );
};

export default ActivationPage;
