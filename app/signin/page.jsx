import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <div className="p-4 pt-8 w-3/4 m-auto">
        <img
          style={{ height: "30px" }}
          src="https://i.postimg.cc/nLqmXLC3/Linkedin-logo-png.png"
          alt="Linkdin-logo"
        />
      </div>
   
      <div className="bg-white rounded p-6 w-full  sm:w-1/2 xl:w-1/4 m-auto shadow-sm">
        <form action="" className="flex flex-col gap-3">
          
          <h3 className="text-3xl font-semibold ">Sign in</h3>
          <div className="flex flex-col">
            
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="email"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col">
            
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <Link href='#' className="text-blue-700 hover:underline font-semibold">Forgot password?</Link>
          <button className="bg-blue-600 text-white text-bold py-3 rounded-full hover:bg-blue-700">
            Sign in
          </button>
          <p className="p-2 px-5 text-sm text-gray-500 font-semibold text-center">
            New to Linkedin? {" "}
            <Link className="text-blue-700 hover:underline" href="#">
              Join now
            </Link>{" "}
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
