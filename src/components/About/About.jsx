import React from 'react'
import { motion } from 'framer-motion'
import b from '../../assets/b.png'
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <>
            <div className='h-[55px] '></div>
            <div id='home' className="ccontainer overflow-hidden text-center h-screen  flex items-center justify-center flex-col mx-auto ">
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .4 }}
                    className='text-[20px] font-medium dark:text-white  text-gray-500'>Hello, I'm Bassant Ali and I'm a </motion.h2>
                <motion.h2
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .4, delay: .4 }}
                    className='lg:text-6xl text-3xl font-extrabold font-[poppins] mb-12 mt-5 lg:w-7/12 mx-auto dark:text-orange lg:leading-18'>UI/UX Designer <br /> and Instructor based in Egypt</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .4, delay: .6 }}
                    className='lg:w-6/12 mx-auto text-[18px] font-medium dark:text-white  text-gray-500'>I love designing websites and user interfaces, doing freelance work and focusing on designing digital products that are easy on users and customers.</motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .4, delay: .7 }}
                    className='flex items-center gap-3 lg:gap-10 mt-14 mb-9'>
                    <Link to={'/projects'} className='btn p-4 lg:px-6 bg-orange   border border-transparent  duration-300 ease-in-out font-medium font-[poppins] text-white rounded-4xl' href="#projects">Check my projects</Link>
                    <a className=' p-4 lg:px-6 text-orange border border-orange rounded-4xl font-normal hover:bg-orange hover:text-white duration-300 font-[poppins] flex items-center gap-2' href="mailto:bassantalielfaqy@gmail.com"> <i class='bx bx-envelope' ></i>Email me</a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration:.4, delay:.8}}
                    className='flex items-center dark:text-white gap-8 text-3xl mx-auto '>
                    <a href='https://www.facebook.com/share/1DH8shRdY2/' target='_blank'>
                        <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-facebook-f'></i>
                    </a>
                    <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-instagram'></i>
                    <a href='https://www.behance.net/bossyalabdalsa/projects?error=invalid_scope' target='_blank'>
                        <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-behance'></i>
                    </a>
                    <a href='https://wa.me/201044859994?text=مرحبا%20اريد%20الاستفسار%20عن%20خدمة' target='_blank'>
                        <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-whatsapp'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/basant-ali-1029ba284/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'>
                        <i className='cursor-pointer  hover:text-orange duration-300 fa-brands fa-linkedin'></i>
                    </a>
                </motion.div>
            </div></>
    )
}
