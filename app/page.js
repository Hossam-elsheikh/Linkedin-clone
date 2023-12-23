import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Container from "./ui/Container";
import { Avatar } from "@mui/material";
import Details from "@/components/Home/Details";

export default function Home() {
  return (
    <div className="grid grid-cols-10 w-3/4 m-auto py-5 gap-6 relative">
      <div className="flex flex-col gap-3 col-span-2">
        <Details />
      </div>
      <div className="col-span-5 bg-gray-300">

      </div>
      <div className="bg-gray-200 col-span-3"></div>
    </div>
  );
}
