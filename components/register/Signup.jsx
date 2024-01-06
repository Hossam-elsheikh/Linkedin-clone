"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import axiosInstance from '../../axios'
import Link from "next/link";
const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        jobTitle: "",
        email: "",
        password: "",
        phoneNumber:+20
      });
      const router = useRouter();
    
      const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const data = await axiosInstance.post(`user/addUser`,form);
          console.log(data);
          router.push('/signin')
    
        } catch (err) {
          console.log("error", err);
        }
      };
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
            <p className="text-3xl text-gray-600 p-2">
              Make the most of your professional life
            </p>
          </div>
          <div className="bg-white rounded p-6 w-full  sm:w-1/2 xl:w-1/4 m-auto shadow-sm">
            <form
              action=""
              className="flex flex-col gap-2"
              onSubmit={(e) => submitHandler(e)}
            >
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
                  value={form.name}
                  type="text"
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                  }}
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
                  value={form.jobTitle}
                  onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-gray-600 font-semibold text-xs"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="border border-gray-700  rounded p-1 px-3"
                  id="phone"
                  type="number"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
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
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
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
              <button
                type="submit"
                className="bg-blue-600 text-white text-bold py-3 rounded-full hover:bg-blue-700"
              >
                Agree & Join
              </button>
              <p className="p-2 px-5 text-sm text-gray-500 font-semibold text-center">
                Already on Linkedin?{" "}
                <Link className="text-blue-700 hover:underline" href="#">
                  Sign in
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      );
}

export default Signup