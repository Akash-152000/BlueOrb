import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';

const Tech = () => {
  return (

    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {technologies.map((technology, index) =>
        /*----name of the balls------*/
      (<div className='w-18 h-18' key={index}>

      <BallCanvas icon={technology.icon}/>

    </div>

    ))}

    </div>
  )
}

export default SectionWrapper(Tech,"");