import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CiWarning } from "react-icons/ci";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <section className=' h-screen bg-[#FFF8DC] flex justify-center flex-col gap-6 items-center'>
        <h2 className=' font-bold text-2xl'>Login to your Account</h2>
        <form
          className=' bg-white shadow-2xl text-lg rounded-md w-[25%] flex flex-col gap-4 py-8 p-4'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <label htmlFor='email'>Email address:</label>
            <input
              className=' p-1 rounded-md shadow-lg outline outline-1 outline-gray-200'
              type='email'
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            {errors.email && (
              <p className='flex items-center gap-2 text-red-600 text-lg mt-2'>
                {" "}
                <CiWarning /> {errors.email.message}
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email'>Password</label>
            <input
              className=' p-1 rounded-md shadow-lg outline outline-1 outline-gray-200'
              type='password'
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.password && (
              <p className=' flex items-center gap-2 text-red-600 text-lg mt-2'>
                {" "}
                <CiWarning /> {errors.password.message}
              </p>
            )}
          </div>
          <div className='flex justify-between '>
            <span>
              {" "}
              <input type='checkbox' {...register("remember_me")} />
              <label className=' ml-2' htmlFor='remember_me'>
                Remember me
              </label>
            </span>

            <Link
              to='/forgot-password'
              className=' text-blue-400 cursor-pointer hover:underline'>
              Forgot your password?
            </Link>
          </div>
          <button
            type='submit'
            className=' bg-blue-600 p-2 rounded-md text-white'>
            Login
          </button>
          <div className='signup'>
            <p>
              Not have any account?{" "}
              <Link
                to='/signup'
                className=' text-blue-400 font-semibold cursor-pointer hover:underline'>
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
