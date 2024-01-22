'use client'
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import UserDetails from "@/components/Profile/UserDetails";
<<<<<<< HEAD
import useFetchUser from "../../components/useHooks/useFetchUser";
=======
<<<<<<< HEAD
import People from "@/components/Profile/People";
=======
import useFetchUser from "./useFetchUser";
>>>>>>> 75fb296746a197b33419b4278bf617d0190efa08
import Cookies from "js-cookie";

const Page = () => {

  const userId = Cookies.get('userId')
  const userDetails = useFetchUser(userId)
>>>>>>> 5136eef16d3d7ce570e6b6fbfd92129efcb1e8a6

  return (
<<<<<<< HEAD
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6 relative">
      <div className=" col col-span-7  lg:col-span-5">
        <UserDetails/>
=======
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6">
      <div className=" col col-span-5">
        <UserDetails userDetails={userDetails} />
        
>>>>>>> 5136eef16d3d7ce570e6b6fbfd92129efcb1e8a6
      </div>
      <div className="col col-span-7  lg:col-span-2 relative">
        <People/>
      </div>
    </div>
  );
};

export default Page;
