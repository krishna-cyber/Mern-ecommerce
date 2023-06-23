import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className=' min-h-[80vh] bg-hero bg-no-repeat flex justify-center items-center '>
      <div className=" px-[30%] text-slate-600">
      <h1 className=" font-bold text-5xl text-slate-700">Best Collection For Home Decoration</h1>
      <p className=" mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum inventore veniam dolorum, facilis officia hic nisi quis sed eos quo autem nobis totam consequuntur ad adipisci iste, provident repudiandae velit.</p>
      <Link to="/products">
      <button className=" mt-3 bg-black text-white text-lg px-4 p-3 font-semibold rounded-md">Shop Now
      </button>
      </Link>
      </div>
       
      </div>
    </>
  );
};

export default Hero;
