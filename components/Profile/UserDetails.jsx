import React from "react";
import Info from "./Info";
import Analytics from "./Analytics";
import Activity from "./Activity";
import Education from "./Education";
import Certifications from "./Certifications";
import Skills from "./Skills";

const UserDetails = () => {
  return (
    <div className="flex flex-col gap-2">
      <Info />
      <Analytics />
      <Activity />
      <Education />
      <Certifications />
      <Skills/>
    </div>
  );
};

export default UserDetails;
