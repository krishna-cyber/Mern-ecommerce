import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Forgot = () => {
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
        <h2 className=' font-bold text-2xl'>Forgot your password</h2>
        <form
          className=' bg-white shadow-2xl text-lg rounded-md w-[25%] flex flex-col gap-8 py-8 p-4'
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
          </div>

          <button
            type='submit'
            className=' bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white'>
            Submit
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

export default Forgot;
