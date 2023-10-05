import React from 'react'
import earth from "../assets/earth.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='h-[300px] flex justify-around items-center '>
        <div className='border-r w-full flex justify-center'>
          <img src={earth} alt='logo' className='w-[100px] h-[100px] object-contain  ' />
        </div>
        <div className='w-full flex justify-center'>
          <Link to="/privacy-policy">
          <div className='cursor-pointer'>Privacy Policy</div>
          </Link>
        </div>
        <div className='flex flex-col border-l w-full items-center'>
          <span className='text-3xl font-bold'>Contact us:</span>
          <span>akash@blueorb.in</span>
          <span>9326977987</span>
        </div>
      </div>
    </>
  )
}

export default Footer