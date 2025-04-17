import React from 'react'

export default function Btn() {
  return (
    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='cursor-pointer w-12 h-12 rounded-full fixed end-3 bottom-3 text-white bg-orange z-50 flex items-center justify-center text-2xl'>
        <i className="fa-solid fa-arrow-up"></i>
    </div>
  )
}
