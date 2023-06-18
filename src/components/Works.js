import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../style';

import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

/*----these props are being imported from constants----*/
const ProjectCard = ({ index,
  name, description, tags, image, source_code_link, link}) => {
  return (
    /*----for animation------- */
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/**------for the cards-----*/}
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        {/*---for placing the content inside the cards  */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'></img>

          {/**-----for placing the github icon */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        
          </div>
        </div>
        {/*-------discription of the projects----- */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        {/*-----links---- */}
        <p className='mt-2 bg-tertiary text-[14px] cursor-pointer'
          onClick={() => window.open(link, "_blank")}>{link}</p>

        {/*---------------projects powerd by------ */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant
        ()}>
        <p className={styles.sectionSubText}>Our work</p>
        {/*-----heading---------- */}
        <h2 className={styles.sectionHeadText}>What we have done so far..</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >Following projects showcases our skills and experience through
          real-world examples of our work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects our
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.</motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {/*-----looping----- */}
        {projects.map((project, index) => (

          <ProjectCard key={`project-${index}`} index={index}   /* to spread out the properties of the project -> */
            {...project} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')