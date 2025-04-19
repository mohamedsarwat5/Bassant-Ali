import React from 'react'
import { motion } from 'framer-motion'
import b from '../../assets/b.png'


export default function Contact() {
  return (
    <>
      <div className='h-[55px] '></div>

      <div className='flex flex-col min-h-screen items-center justify-center overflow-hidden mx-auto bg-black'>
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: .4 }}
          className='lg:text-6xl text-3xl font-bold font-[poppins] text-white text-center'>Contact Me</motion.h2>
        <div className='flex items-center justify-center flex-col-reverse  lg:flex-row gap-7 lg:gap-40 lg:px-[120px] overflow-hidden px-6 py-12'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: .4, }}
            className='flex flex-col  text-center lg:text-left '>
            <h2 className='lg:text-6xl text-3xl font-bold font-[poppins] mb-3 text-white'>Let’s <span className='text-orange'>start</span></h2>
            <h2 className='lg:text-6xl text-3xl font-bold font-[poppins] mb-7 text-white'>project together?</h2>
            <h3 className='font-medium  text-gray-400 text-2xl lg:w-[700px]'>Contact me for questions, collaboration, conversation, or just saying hello. Thank you for stopping by here.</h3>
            <div className='flex items-center text-white gap-8 text-3xl mx-auto mt-6 '>
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
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x:0 }}

            transition={{ duration: .4, }}
            className=''>
            <img src={b} className='w-[300px] rounded-full' alt="" />
          </motion.div>
        </div>
      </div></>
  )
}
