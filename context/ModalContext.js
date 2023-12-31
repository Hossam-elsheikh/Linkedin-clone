'use client'
import { createContext, useState } from 'react';
export const ModalContext = createContext();

import React from 'react'

const ModalContextProvider = ({children}) => {
    const [showModal,setModal] = useState(false)
  return (
    <ModalContext.Provider value={{showModal,setModal}}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider
