"use client";
import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import { inter } from "@/app/ui/fonts";
import Modal from "@/components/Modal/Modal";
import ModalContextProvider, { ModalContext } from "@/context/ModalContext";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html  lang="en">
      <body  className={` ${inter.className}`}>
      <div id="portal"></div>
        <ModalContextProvider>
          <div className="" >
            {pathname === '/signup' || pathname === '/signin'  ? null : <NavBar />}
            {children}

          </div>
        </ModalContextProvider>
      </body>
    </html>
  );
}
