import Container from "@/app/ui/Container";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ShowAll from "@/app/ui/ShowAll";
const Skills = () => {
  const Skill = (provider,title) => {
    return(
        <div className="flex flex-col gap-3 py-3">
            <p className="font-medium">{title}</p>
            {provider && <div className="flex gap-3 items-center">
                <img className="w-8 h-fit" src="https://media.licdn.com/dms/image/C560BAQGK3uuhQer46g/company-logo_100_100/0/1631351788797?e=1712188800&v=beta&t=Lc8nEZd7yeShHMRhc4ke2IaWlYvev5Qt1OltW4OPJ4g" alt="" />
            <p className="text-gray-500 text-sm">Full Stack web development using MERN </p>
            </div>}
        </div>
    )
  };
  return (
    <Container>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between">
          <h2 className="text-lg text-gray-700 font-semibold">Skills</h2>
          <div className="flex gap-2">
            <AddIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
            <EditIcon className="text-gray-600 rounded-full p-1 text-3xl hover:bg-gray-200 cursor-pointer" />
          </div>
        </div>
        <div>
        {Skill(true,'Webpack')}
        <hr />
        {Skill(false,'HTML5')}
        <hr />
        {Skill(true,'CSS')}
        
        </div>
      </div>
      <hr />
      <ShowAll title='15 skills'/>
    </Container>
  );
};

export default Skills;
