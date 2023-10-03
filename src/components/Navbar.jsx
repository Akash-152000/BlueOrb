import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../style';
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import earth from "../assets/earth.png"
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
const Navbar = () => {

  //-----------------------------states------------------------//
  const [active, setActive] = useState("");

  //------for changing the state -------------toggle-----//
  const [toggle, setToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} 
        w-full flex items-center py-5  fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[50px] h-[50px]'
          >
            <EarthCanvas />
          </motion.div> */}
          <img src={earth} alt='logo' className='w-[50px] h-[50px] object-contain ml-[30px]' />


          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            BlueOrb {/**&nbsp; ----unicode space character*/}
            {/* <span className='sm:block hidden'> |Devlopment</span> */}
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (

            <li

              //------ for hover effect of navbar---//
              //-----start-------//
              key={Link.id}
              className={`${active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}

              //----for giving path tothe navbar elemnet-------//

              onClick={() => setActive(Link.title)}

            //--------------end-------------//
            >

              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


        {/** -----------------------navbar for small divices--------------- */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            //----to open and close the menu bar---//
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            //------------------to change the state when clicked ----//
            onClick={() => setToggle(!toggle)}
          />
          {/**------for showing the nabvbarcontent------- in small screen ------- */}



          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >



            {/*---------------for placing the navbar content -------- */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  //------for highlighting the section we are in small devices ----//
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;