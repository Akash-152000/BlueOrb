import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";




const ServiceCard = ({ index, title, icon }) => (

  <Tilt className='xs:w-[250px] w-full'>
    {/*-----for the card visuals----- */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      {/*----------for cards------- */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/*----for the image in the cards  */}
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        {/*----for the text in the card---- */}
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/*-----introduction----- */}
        <p className={styles.sectionSubText}>Introduction</p>
        {/*-----heading---------- */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/*------------------about us-- */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        we are a group of skilled software devlopers with experience in Typescrypt and JavaScript, and experties in framworks like
        React,Node.js,and three.js. we collaborate closely with clients to create efficient,scalable,and user-friendly solutions that solve real-world problems.let`s work together to bring your ideas to life
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");