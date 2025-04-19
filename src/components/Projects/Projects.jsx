import React from 'react'
import { motion } from 'framer-motion'
import mowana from '../../assets/mowana.png'
import Untitled from '../../assets/Untitled.png'
import dash from '../../assets/dash.png'
import dolaby from '../../assets/dolaby.png'
import ehab from '../../assets/ehab.png'
import school from '../../assets/school.png'
import re from '../../assets/re.png'
import dev from '../../assets/dev.png'
import track from '../../assets/track.png'
import devc from '../../assets/devc.png'
import img from '../../assets/2g.png'

export default function Projects() {
  return (
    <>
      <div className='h-[75px] '></div>

      <div className='ccontainer min-h-screen overflow-hidden flex flex-col items-center justify-center'>
        <motion.h2
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .4 }}
          className='lg:text-6xl text-3xl font-bold font-[poppins] text-center mb-11 dark:text-white'>
          Featured Projects
        </motion.h2>
        <div className='flex flex-col lg:flex-row items-center lg:gap-y-2 gap-y-7 flex-wrap'>



          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/209083985/Ehab-Fayez-challenge-Real-Estate-website' target='_blank'>
              <div className='relative  overflow-hidden  '>
                <img src={Untitled} className='rounded-4xl' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Real Estate website</h2>
                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
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

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
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
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/209782567/Ehab-Fayez-Challenge-1-Profile' target='_blank'>
              <div className='relative  '>
                <img src={ehab} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Ehab Fayez Challenge 1</h2>
                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3 '>
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
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/204693795/(otobus)-school-bus-application-case-study' target='_blank'>
              <div className='relative  '>
                <img src={school} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>school bus application</h2>
                <p className='font-medium text-gray-700 dark:text-white capitalize'>case study</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/211352255/Redesign-Ministry-of-health-population-home-page' target='_blank'>
              <div className='relative  '>
                <img src={re} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Redesign Ministry of health...  </h2>
                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/182303325/Developer-Career-Mobile-App-(UIUX)-Case-Study' target='_blank'>
              <div className='relative  '>
                <img src={dev} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Developer Career Mobile App</h2>
                <p className='font-medium text-gray-700 dark:text-white capitalize'>case study</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/182120897/Tracking-Order-For-Macdonald-App-Case-Study' target='_blank'>
              <div className='relative  '>
                <img src={track} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Tracking Order For Macdonald App</h2>
                <p className='font-medium text-gray-700 dark:text-white capitalize'>case study</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/181801349/Landing-page-(UIUX)-Case-stusy' target='_blank'>
              <div className='relative  '>
                <img src={devc} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Landing page (UI/UX)</h2>
                <p className='font-medium text-gray-700 dark:text-white capitalize'>case study</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .4 }}
            className='lg:w-4/12 lg:min-h-[350px] h-full flex  flex-col group lg:px-3'>
            <a href='https://www.behance.net/gallery/202881319/Redesign-Intern2Grow-home-page' target='_blank'>
              <div className='relative  '>
                <img src={img} className='rounded-4xl ' alt="" />
                <div className='absolute end-0 bottom-0 top-0 left-0 h-full w-full rounded-4xl flex items-center justify-center bg-oranget cursor-pointer  text-white opacity-0 group-hover:opacity-100 duration-300'>
                  <a className='text-3xl font-medium font-[poppins]' target='_blank'>  Learn More</a>
                </div>
              </div>
              <div className='px-3 mt-3'>
                <h2 className='capitalize font-bold font-[poppins] text-[20px] dark:text-white'>Redesign Intern2Grow </h2>
                <p className='font-medium text-gray-700 dark:text-white'>Designing Web App - 2024</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>





    </>
  )
}
