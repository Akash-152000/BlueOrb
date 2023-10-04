import React from 'react'
import earth from "../assets/earth.png"

const Footer = () => {
  return (
    <>
      <div className='h-[300px] flex justify-around items-center'>
        <div>
          <img src={earth} alt='logo' className='w-[100px] h-[100px] object-contain ml-[30px]' />
        </div>
        <div>
          
        </div>
        <div className='flex flex-col'>
          <span className='text-3xl font-bold'>Contact us:</span>
          <span>akash@blueorb.in</span>
          <span>9326977987</span>
        </div>
      </div>
    </>
  )
}

export default Footer