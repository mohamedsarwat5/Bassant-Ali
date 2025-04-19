import React from 'react'
import img from '../../assets/bg.png'
import img1 from '../../assets/design-service.c8c074f8.svg'
import img2 from '../../assets/graphic-design.81ae9670.svg'
import img3 from '../../assets/ui-ux-design.7f8252c2.svg'
import { motion } from 'framer-motion'



export default function Services() {




    return (
        <>
            <div className='h-[55px] bg-black'></div>

            <div id='services' className={` ccontainer  bg-black text-5xl bg-cover bg-no-repeat bg-center min-h-screen overflow-hidden flex flex-col items-center justify-center`} style={{ backgroundImage: `url(${img})` }}>
                <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{ duration: .4 }}
                    className='lg:text-6xl text-3xl font-bold font-[poppins] text-white text-center'>What can I do for you</motion.h2>
                <div className='flex flex-col lg:flex-row gap-4 items-center justify-center mt-12'>

                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4,  }}
                        className='p-8 lg:w-4/12 bg-white dark:bg-fd rounded-4xl text-center'>
                        <div className=' flex items-center  justify-center h-32  w-32 mx-auto mb-3 bg-orange rounded-full'><img src={img3} alt="" /></div>
                        <h3 className=' font-bold  text-3xl dark:text-white'>UI/UX Design</h3>
                        <h3 className='text-2xl text-gray-600 dark:text-gray-400 mt-2'>Designing interfaces that are effective and easy to use by users and customers</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4,  }}
                        className='p-8 lg:w-4/12 bg-white dark:bg-fd rounded-4xl text-center'>
                        <div className=' flex items-center  justify-center h-32  w-32 mx-auto mb-3 bg-orange rounded-full'><img src={img2} alt="" /></div>
                        <h3 className=' font-bold  text-3xl dark:text-white'>Graphic Design</h3>
                        <h3 className='text-2xl text-gray-600 dark:text-gray-400 mt-2'>Convey information about product in a unique and creative way through design

                        </h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}

                        transition={{ duration: .4,  }}
                        className='p-8 lg:w-4/12 bg-white dark:bg-fd rounded-4xl text-center'>
                        <div className=' flex items-center  justify-center h-32  w-32 mx-auto mb-3 bg-orange rounded-full'><img src={img1} alt="" /></div>
                        <h3 className=' font-bold  text-3xl dark:text-white'>Design Service</h3>
                        <h3 className='text-2xl text-gray-600 dark:text-gray-400 mt-2'>We can help and provide value for your business through website and mobile app
                        </h3>
                    </motion.div>


                </div>
            </div>
        </>)
}
