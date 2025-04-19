import React from 'react'
import { motion } from 'framer-motion'
import mowana from '../../assets/mowana.png'
import Untitled from '../../assets/Untitled.png'
import dash from '../../assets/dash.png'
import { Link } from 'react-router-dom'
import dolaby from '../../assets/dolaby.png'

// import mowana from '../../assets/mowana.png'
// import mowana from '../../assets/mowana.png'
// import mowana from '../../assets/mowana.png'


export default function ProjectsPre() {
    return (
        <>
            <div className='h-[25px] '></div>


            <div className='ccontainer  overflow-hidden mx-auto flex flex-col items-center justify-center'>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ duration: .4 }}
                    className='lg:text-6xl text-3xl font-bold font-[poppins] text-center mb-11 dark:text-white'>
                    Featured Projects
                </motion.h2>
                <div className='flex flex-col lg:flex-row items-center gap-4 gap-y-6'>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, delay: .3 }}

                        className='lg:w-4/12 flex  flex-col group'>
                        <a href='https://www.behance.net/gallery/219527369/mowana-hotel-landing-page' target='_blank'>

                            <div className='relative    '>
                                <img src={mowana} className='rounded-4xl' alt="" />
                                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                                    <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                                </div>
                            </div>
                            <div className='px-3 mt-3'>
                                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>mowana hotel landing page</h2>
                                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, delay: .3 }}

                        className='lg:w-4/12 flex  flex-col group'>
                        <a href='https://www.behance.net/gallery/219161657/Dolaby-app-(uxui-case-study)' target='_blank'>
                            <div className='relative  '>
                                <img src={dolaby} className='rounded-4xl ' alt="" />
                                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                                    <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                                </div>
                            </div>
                            <div className='px-3 mt-3'>
                                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Dolaby app</h2>
                                <p className='font-medium text-gray-700 dark:text-white capitalize'>case study</p>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4, delay: .3 }}

                        className='lg:w-4/12 flex  flex-col group'>
                        <a href='https://www.behance.net/gallery/183773037/Dashboard' target='_blank'>

                            <div className='relative  '>
                                <img src={dash} className='rounded-4xl ' alt="" />
                                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                                    <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                                </div>
                            </div>
                            <div className='px-3 mt-3'>
                                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Dashboard</h2>
                                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
                            </div>
                        </a>
                    </motion.div>

                </div>
                <Link to='/projects' className='mt-[40px] bg-orange px-12 py-3 rounded-3xl  duration-300  btn border border-transparent ease-in-out text-white font-[poppins] font-medium' > See more</Link>
            </div>





        </>
    )
}
