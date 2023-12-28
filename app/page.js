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
import AddPost from "@/components/Home/AddPost";

export default function Home() {
  const { showModal, setModal } = useContext(ModalContext);

  return (
    <>
      {showModal && (
        <Portal>
          <AddPost />
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
