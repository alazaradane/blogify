import React from 'react'
import { Toast } from "flowbite-react";
import { HiExclamation } from "react-icons/hi";
import { useEffect } from 'react';

const ErrorToast = ({message, onClose}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose(); 
    }, 5000); 

    return () => clearTimeout(timeout); 
  }, []);
  return (
    <>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle className=' mt-3 hover:bg-none' />
      </Toast>
    </>
  )
}

export default ErrorToast