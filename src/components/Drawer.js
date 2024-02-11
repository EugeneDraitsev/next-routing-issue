'use client'

import { useEffect } from 'react'


const Drawer = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 
        transition-opacity duration-300 ease-in-out sm:items-center sm:justify-center 
        ${isOpen ? 'cursor-pointer opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[80vw] overflow-y-auto bg-white px-2 py-4 
        transition-transform duration-200 ease-in-out 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {children}
      </aside>
    </>
  )
}

export default Drawer
