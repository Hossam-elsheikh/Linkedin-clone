import { ModalContext } from "@/context/ModalContext";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, hideModal }) => {
  const [mounted, setMounted] = useState(false);
  const { setModal } = useContext(ModalContext);

  const PortalLayout = () => (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-40">
      <div
        className="opacity-60 bg-gray-800 w-full h-full absolute top-0"
        onClick={() => setModal(false)}
      ></div>
      <div className="z-50 w-full md:w-1/2 flex items-center justify-center p-2">{children}</div>
    </div>
  );

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.overflow = "hidden";

    return () => {
      setMounted(false);

      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return mounted
    ? createPortal(<PortalLayout />, document.querySelector("#portal"))
    : null;
};

export default Portal;
