import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from
  'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants'
import { SectionWrapper } from "../hoc";
import { textVariant } from '../utils/motion';


/*----------------------experience card to make changes to the experinence section---------------------------------------- */

const ExperienceCard = ({ experience }) =>
(

  <VerticalTimelineElement
    /*styling of the content written in discription */
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    /*date can be changed from experience file */
    date={experience.date}
    /*  for the icon styling */
    iconStyle={{ background: experience.iconBg }}
    /*appearence of the icon */
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%]
      object-contain'/>
      </div>
    }>
    <div>
      {/*------------title------------------ */}
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      {/*------------styling---------------- */}
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {/*-------------comapny--------------- */}
        {experience.company_name}
      </p>

      {/*----------------for the points--------*/}
      <ul className='mt-5 list-disc ml-5 space-y-2'> 
      {experience.points.map((point,index) =>(
     <li key={index} className='text-white-100 text-[14px] pl-1  tracking-wider'>
  {point}
     </li>
      ))}
   </ul>


    </div>
  </VerticalTimelineElement>
)



const Experience = () => {
  return (
    <>
      {/*--------heading for experinece section-------------*/}
      <motion.div variants={textVariant
        ()}>
        <p className={styles.sectionSubText}>What we know and</p>
        {/*-----heading---------- */}
        <h2 className={styles.sectionHeadText}>What we excel at..</h2>
      </motion.div>

      {/*---------vertical timeline-------- */}
      <div className='mt-20 flex flex-col'>
        {/*----looping over experience  */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            /*----return a experiencecard for each one -------- */
            <ExperienceCard key={index} experience={experience} />
          ))}


        </VerticalTimeline>
      </div>
    </>
  )
}


//rapping the experinece section to middle the content 
export default SectionWrapper(Experience, "work")