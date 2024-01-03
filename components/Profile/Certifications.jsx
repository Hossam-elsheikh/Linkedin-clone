import Container from "@/app/ui/Container";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LaunchIcon from "@mui/icons-material/Launch";
import ShowAll from "@/app/ui/ShowAll";
const Certifications = () => {
  const Cert = (CertAvailable, Credentials, skills) => {
    return (
      <div className="flex gap-2 ">
        <img
          className="w-10 h-fit"
          src="https://iti.gov.eg/assets/images/iti-logo.png"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-semibold">
              Full Stack web development using MERN{" "}
            </p>
            <p className="text-xs text-gray-600">
              Information Technology Institute (ITI)
            </p>
            <p className="text-xs text-gray-500">Issued Nov 2023</p>
          </div>
          {Credentials && (
            <button className="text-gray-500 inset-1 p-1 px-3 text-sm outline outline-1 outline-gray-600 rounded-full w-fit hover:bg-gray-100 hover:outline-2">
              Show credential <LaunchIcon className="text-xl" />{" "}
            </button>
          )}
          {skills && (
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Skills: </span>
              Bootstrap · SASS · Responsive Web Design · HTML5 · Cascading Style
              Sheets (CSS) · Redux.js · Responsiveness · React.js · JavaScript ·
              TypeScript · Front-end Development · Webpack
            </p>
          )}
          {CertAvailable && (
            <div className="flex gap-4 items-center">
                <img className="h-16 object-cover w-28 rounded-lg border" src="https://media.licdn.com/dms/image/D4D2DAQEC8DBqKQQVNQ/profile-treasury-image-shrink_800_800/0/1702677982900?e=1704888000&v=beta&t=EumYcvnb0OGLHuVwg6JHOxonjL832AzX_uxJVB8b5As" alt="" />
                <p className="font-semibold text-sm">MERN Track ITI Certificate</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <Container>
      <div className="flex flex-col p-5 gap-2">
        <div className="flex justify-between">
          <h2 className="text-lg text-gray-700 font-semibold">
            Licenses & certifications
          </h2>
          <div className="flex gap-2">
            <AddIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
            <EditIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
          </div>
        </div>
        {Cert(true, true, true)}
      </div>
      <hr />
      <ShowAll title='5 licenses & certifications
'/>
    </Container>
  );
};

export default Certifications;
