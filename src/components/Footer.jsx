import React from 'react'
import earth from "../assets/earth.png"
import { Link } from 'react-router-dom'

const Footer = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // To animate the scroll
    });
  }
  return (
    <>
      <div className='h-[300px] lg:flex justify-around items-center '>
        <div className='border-r w-full flex justify-center'>
          {props.whichPage==="home"?<img onClick={handleScrollToTop} src={earth} alt='logo' className='w-[100px] h-[100px] object-contain cursor-pointer ' />:<Link to="/">
            <img onClick={handleScrollToTop} src={earth} alt='logo' className='w-[100px] h-[100px] object-contain cursor-pointer ' />
          </Link>}
          
        </div>
        <div className='w-full flex justify-center'>
          {props.whichPage === "privacy" ? <><Link to="/">
            <div onClick={handleScrollToTop} className='cursor-pointer hover:shadow-myhover transition duration-300 ease-in-out p-4 rounded-lg'>Home</div>
          </Link></> : <Link to="/privacy-policy">
            <div onClick={handleScrollToTop} className='cursor-pointer hover:shadow-myhover transition duration-300 ease-in-out p-4 rounded-lg'>Privacy Policy</div>
          </Link>}

        </div>
        <div className='flex flex-col border-l w-full items-center'>
          <span className='text-3xl font-bold'>Contact us:</span>
          <span>akash@blueorb.in</span>
          <span>akashyadav90000@gmail.com</span>
          <span>+91-8779237334</span>
        </div>
      </div>
    </>
  )
}

export default Footer
