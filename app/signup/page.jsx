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
      <div className="p-2 w-full text-center">
        <p className="text-3xl text-gray-600 p-2">Make the most of your professional life</p>
      </div>
      <div className="bg-white rounded p-6 w-full  sm:w-1/2 xl:w-1/4 m-auto shadow-sm">
        <form action="" className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label
              className="text-gray-600 font-semibold text-xs"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="name"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-gray-600 font-semibold text-xs"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="jobTitle"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-gray-600 font-semibold text-xs"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="email"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-gray-600 font-semibold text-xs"
              htmlFor="password"
            >
              Password (+6 Characters)
            </label>
            <input
              className="border border-gray-700  rounded p-1 px-3"
              id="password"
              type="password"
            />
          </div>
          <p className="p-2 px-5 text-xs text-gray-500 font-semibold">
            By clicking Agree & Join you agree to the Linkedin{" "}
            <Link className="text-blue-700 hover:underline" href="#">
              User Agreement Privacy Policy
            </Link>{" "}
            and{" "}
            <Link className="text-blue-700 hover:underline" href="#">
              Cookie Policy
            </Link>
            .
          </p>
          <button className="bg-blue-600 text-white text-bold py-3 rounded-full hover:bg-blue-700">
            Agree & Join
          </button>
          <p className="p-2 px-5 text-sm text-gray-500 font-semibold text-center">
            Already on Linkedin? {" "}
            <Link className="text-blue-700 hover:underline" href="#">
              Sign in
            </Link>{" "}
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
