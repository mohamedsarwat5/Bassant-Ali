import React from 'react'
import Services from '../Services/Services'
import { motion } from 'framer-motion'
import ProjectsPre from '../ProjectsPre/ProjectsPre'
import Contact from '../Contact/Contact'
import { Link } from 'react-router-dom'

export default function Home() {



    return (<>
        {/* <div className='h-[25px] '></div> */}
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

                    </div>




        <Services></Services>
        <ProjectsPre></ProjectsPre>
        <Contact></Contact>
    </>
    )

}
