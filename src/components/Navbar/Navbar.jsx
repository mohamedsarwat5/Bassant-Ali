import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const handledarkmode = () => {
        document.documentElement.classList.toggle('dark')
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className=" bg-black text-white rounded-b-2xl lg:rounded-b-none">
            <div className="max-w-screen-xl flex flex-wrap items-center  justify-between p-4 mx-auto px-6">
                <div className='flex items-center gap-3'>
                    <span className='h-2 w-2 bg-white rounded-full'></span>
                    <Link className='font-[poppins] font-medium text-lg lg:text-2xl'>Bassant Ali</Link>
                    <span className='h-2 w-2 bg-white rounded-full'></span>
                </div>
                <button onClick={() => setIsOpen(!isOpen)} type="button" className=" cursor-pointer md:hidden">
                    <i className={`${isOpen ? 'fa-xmark' : 'fa-bars'} fa-solid  text-[22px] `}></i>
                </button>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden w-full md:w-auto md:opacity-100 md:scale-100 md:max-h-full md:overflow-visible ${isOpen ? 'max-h-[500px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}md:block `}
                >
                    <ul className="font-medium text-center flex flex-col md:flex-row p-4 md:p-0 mt-4  gap-9  md:mt-0">
                        <li>
                            <NavLink to={'/'} onClick={() => setIsOpen(false)} className={`font-[poppins]   hover:text-orange duration-300 ease-in-out cursor-pointer`}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/rooms'} onClick={() => setIsOpen(false)} className={`font-[poppins]   hover:text-orange duration-300 ease-in-out cursor-pointer`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/services'} onClick={() => setIsOpen(false)} className={`font-[poppins]  hover:text-orange duration-300 ease-in-out cursor-pointer`}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/book'} onClick={() => setIsOpen(false)} className={`font-[poppins]  hover:text-orange duration-300 ease-in-out cursor-pointer`}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} onClick={() => setIsOpen(false)} className={`font-[poppins]  hover:text-orange duration-300 ease-in-out cursor-pointer`}>Contact</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}
