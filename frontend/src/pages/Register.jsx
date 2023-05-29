import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { server } from "../utils/server";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //function after form submission
  const onSubmit = async (data) => {
    data.avatar = avatar;
    console.log(data);

    //toast with promise
    const response = await toast.promise(
      server.post("/users/register", data).then((res) => {
        console.log(res);
      }),
      {
        pending: "Please wait registering user... 🤔",
        success: "User verification email sent 📧",
        error: "User registration failed 😢",
      }
    );
  };

  const [avatar, setAvatar] = useState(null);
  return (
    <>
      <section className=' h-screen bg-[#FFF8DC] flex justify-center flex-col gap-6 items-center'>
        <h2 className=' font-bold text-2xl'>Register for a new user</h2>
        <form
          className=' bg-white shadow-2xl text-lg rounded-md w-[25%] flex flex-col gap-4 py-8 p-4'
          onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col'>
            <label htmlFor='name'>Full Name:</label>
            <input
              className=' p-1 rounded-md shadow-lg outline outline-1 outline-gray-200'
              type='text'
              {...register("name", {
                required: {
                  value: true,
                  message: "Full name is required",
                },
              })}
            />
          </div>
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
          </div>
          <div className='flex items-center '>
            <span className=' h-16 w-16 flex items-center'>
              {" "}
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt='avatar'
                  className=' object-cover h-full w-full rounded-full'
                />
              ) : (
                <RxAvatar className=' text-2xl' />
              )}
            </span>

            <label htmlFor='file-input'>
              <span className=' ml-2 cursor-pointer p-2 bg-slate-300 rounded-md'>
                Upload a file
              </span>
              <input
                type='file'
                name='file-input'
                id='file-input'
                accept='.jpg,.png,.jpeg'
                onChange={(e) => setAvatar(e.target.files[0])}
                className=' sr-only'
              />
            </label>
          </div>
          <button
            type='submit'
            className=' bg-blue-600 p-2 rounded-md text-white'>
            Sign up
          </button>
          <div className='signup'>
            <p>
              Already have an account?{" "}
              <Link
                to='/login'
                className=' text-blue-400 font-semibold cursor-pointer hover:underline'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
