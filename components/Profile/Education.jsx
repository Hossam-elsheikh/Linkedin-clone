import Container from "@/app/ui/Container";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const Education = () => {
  const Edu = () => {
    return (
      <div className="flex gap-2 items-center">
        <img
          className="w-10 h-fit"
          src="https://upload.wikimedia.org/wikipedia/ar/2/2e/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%B3%D9%88%D9%87%D8%A7%D8%AC.png"
          alt=""
        />
        <div>
            <p className="text-sm font-semibold">Sohag University</p>
            <p className="text-xs text-gray-600">Computer Science</p>
            <p className="text-xs text-gray-500">2016 - 2021</p>
        </div>
      </div>
    );
  };
  return (
    <Container>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-lg text-gray-700 font-semibold">Education</h2>
          <div className="flex gap-2">
            <AddIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
            <EditIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
          </div>
        </div>
        {Edu()}
      </div>
    </Container>
  );
};

export default Education;
