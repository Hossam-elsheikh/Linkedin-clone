import Footer from "@/components/Footer/Footer";
import NetNav from "@/components/Network/NetNav";
import Network from "@/components/Network/Network";
import React from "react";

function page() {
  return (
    <div className="w-full xl:w-3/4 grid grid-cols-4 m-auto gap-6 p-2 md:py-6">
      <div className="col col-span-4 lg:col-span-1 ">
        <NetNav/>
        <Footer/>
      </div>
      <div className="col col-span-4 lg:col-span-3 ">
        <Network/>
      </div>
    </div>
  );
}

export default page;
