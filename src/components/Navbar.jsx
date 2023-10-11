import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from '../style';
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import earth from "../assets/earth.png"
// import { motion } from "framer-motion";
// import { EarthCanvas } from "./canvas";
// import { slideIn } from "../utils/motion";
const Navbar = ({ whichPage, scrollToAboutComponent, scrollToWorkComponent, scrollToContactComponent }) => {

  //-----------------------------states------------------------//
  const [active, setActive] = useState("");

  //------for changing the state -------------toggle-----//
  const [toggle, setToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // const scrollToComponent = () => {
  //   console.log(props.aboutRef);
  //   props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // };

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
          <img src={earth} alt='logo' className='w-[50px] h-[50px] object-contain ml-[30px]' />


          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            BlueOrb {/**&nbsp; ----unicode space character*/}
            {/* <span className='sm:block hidden'> |Devlopment</span> */}
          </p>
        </Link>

        {whichPage === "home" ? <><ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav, index) => (

            <li

              //------ for hover effect of navbar---//
              //-----start-------//
              key={index}
              className={`${active === Link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}

              //----for giving path to the navbar element-------//

              onClick={() => setActive(Link.title)}

            //--------------end-------------//
            >
              {nav.title === "About" ? <p onClick={scrollToAboutComponent}>{nav.title}</p> : nav.title === "Work" ? <p onClick={scrollToWorkComponent}>{nav.title}</p> : <p onClick={scrollToContactComponent}>{nav.title}</p>}

            </li>
          ))}
        </ul>


          {/** -----------------------navbar for small devices--------------- */}
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
                    <a key={nav.id} href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>


            </div>
          </div></> : <Link to="/">
          <p>Home</p></Link>}

      </div>
    </nav>
  );
};

export default Navbar;