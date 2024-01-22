'use client'
import React, { useEffect, useState } from "react";
import Container from "../ui/Container";
import UserDetails from "@/components/Profile/UserDetails";
import useFetchUser from "../../components/useHooks/useFetchUser";
import Cookies from "js-cookie";

const Page = () => {

  const userId = Cookies.get('userId')
  const userDetails = useFetchUser(userId)

  return (
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6">
      <div className=" col col-span-5">
        <UserDetails userDetails={userDetails} />
        
      </div>
      <div className="col bg-gray-200 col-span-2">2</div>
    </div>
  );
};

export default Page;
