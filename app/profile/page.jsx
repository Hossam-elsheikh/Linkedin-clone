import React from "react";
import Container from "../ui/Container";
import UserDetails from "@/components/Profile/UserDetails";

const page = () => {
  return (
    <div className="grid grid-cols-7 w-full xl:w-3/4  m-auto gap-6 p-2 md:py-6">
      <div className=" col col-span-5">
        <UserDetails/>
      </div>
      <div className="col bg-gray-200 col-span-2">2</div>
    </div>
  );
};

export default page;
