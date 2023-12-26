"use client";
import NavBar from "@/components/Navbar/NavBar";
import Image from "next/image";
import Container from "./ui/Container";
import Details from "@/components/Home/Details";
import Posts from "@/components/Home/Posts";
import Recommendations from "@/components/Home/Recommendations";
import Footer from "@/components/Footer/Footer";
import ModalContextProvider, { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";
import Modal from "@/components/Modal/Modal";
import Portal from "@/components/Modal/Overlay";

export default function Home() {
  const { showModal, setModal } = useContext(ModalContext);

  return (
    <>
      {showModal && (
        <Portal>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40">
            <div
              className="opacity-60 bg-gray-800 w-full h-full absolute top-0"
              onClick={() => setModal(false)}
            ></div>
            <Container className="z-40 p-3">trial</Container>
          </div>
        </Portal>
      )}
      <div className={`grid grid-cols-10 w-full xl:w-3/4  m-auto p-0 gap-6 relative sm:p-5`}>
        <div className="flex flex-col gap-3 col-span-10 sm:col-span-3 lg:col-span-2">
          <Details />
        </div>
        <div className="col-span-10 sm:col-span-7 lg:col-span-5 ">
          <Posts />
        </div>
        <div className="col-span-10 sm:col-span-3 hidden lg:block">
          <Recommendations />
          <Footer />
        </div>
      </div>
    </>
  );
}
