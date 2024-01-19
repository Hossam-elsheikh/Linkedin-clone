import React from "react";
import Container from "../ui/Container";
import UserDetails from "@/components/Profile/UserDetails";
import People from "@/components/Profile/People";

const page = () => {
  return (
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6 relative">
      <div className=" col col-span-7  lg:col-span-5">
        <UserDetails/>
      </div>
      <div className="col col-span-7  lg:col-span-2 relative">
        <People/>
      </div>
    </div>
  );
};

export default page;
