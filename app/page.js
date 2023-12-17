import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Container from "./ui/Container";
import { Avatar } from "@mui/material";

export default function Home() {
  return (
    <div className="grid grid-cols-4 w-3/4 m-auto py-5 gap-6">
      <div className="flex flex-col gap-3">
        <Container className="p-0">
          <div className="h-20">
            <img
              className="object-cover h-20 rounded-t-md w-full"
              src="https://images.pexels.com/photos/2096622/pexels-photo-2096622.jpeg"
              alt='cover image'
            />
          </div>
          <Avatar
            src="https://media.licdn.com/dms/image/D4D35AQG8OmfeytWhgA/profile-framedphoto-shrink_400_400/0/1699559892633?e=1703278800&v=beta&t=u0PecOUSe7qOI2tHOmWHPFH4W_FT30Ek4VN-9fMExFQ"
            sx={{ width: "70px", height: "70px",marginX:'auto',marginTop:'-2rem',border:'2px solid white' }}
          />
        </Container>
      </div>
      <div className="col-span-2"></div>
      <div className=""></div>
    </div>
  );
}
