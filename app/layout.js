"use client";
import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import { inter } from "@/app/ui/fonts";
import Modal from "@/components/Modal/Modal";
import ModalContextProvider, { ModalContext } from "@/contexts/ModalContext";
import { useContext } from "react";

export default function RootLayout({ children }) {
  return (
    <html  lang="en">
      <body  className={` ${inter.className}`}>
      <div id="portal"></div>
        <ModalContextProvider>
          <div className="" >
            <NavBar />
            {children}
          </div>
        </ModalContextProvider>
      </body>
    </html>
  );
}
