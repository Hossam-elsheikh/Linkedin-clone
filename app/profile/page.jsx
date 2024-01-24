'use client'
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import UserDetails from "@/components/Profile/UserDetails";
import People from "@/components/Profile/People";
import useFetchUser from "../../components/useHooks/useFetchUser";
import Cookies from "js-cookie";
import People from "@/components/Profile/People";

const Page = () => {

  const userId = Cookies.get('userId')
  const userDetails = useFetchUser(userId)

  return (
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6">
      <div className=" col col-span-5">
        <UserDetails userDetails={userDetails} />
        
      </div>
      <div className="col col-span-7  lg:col-span-2 relative">
        <People/>
      </div>
    </div>
  );
};

export default Page;
