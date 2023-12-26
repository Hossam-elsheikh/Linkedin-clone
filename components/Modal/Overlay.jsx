import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Portal= ({ children }) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
      document.documentElement.style.overflow ='hidden'
      
      return () => {setMounted(false)
        
        document.documentElement.style.overflow ='auto'
      }
   }, [])

   return mounted
      ? createPortal(children, 
        document.querySelector("#portal"))
      : null
}

export default Portal