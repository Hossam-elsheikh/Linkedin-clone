  "use client";
  import NavBar from "@/components/Navbar/NavBar";
  import "./globals.css";
  import { inter } from "@/app/ui/fonts";
  import Modal from "@/components/Modal/Modal";
  import ModalContextProvider, { ModalContext } from "@/context/ModalContext";
  import { usePathname } from 'next/navigation';
  import { Providers } from "../redux/provider";

  export default function RootLayout({ children }) {
    const pathname = usePathname();

    return (
      <html  lang="en">
        <body  className={` ${inter.className}`}>
          <Providers>
        <div id="portal"></div>
          <ModalContextProvider>
            <div className="" >
              {pathname === '/signup' || pathname === '/signin'  ? null : <NavBar />}
              {children}

            </div>
          </ModalContextProvider>
          </Providers>
        </body>
      </html>
    );
  }
