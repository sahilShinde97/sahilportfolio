import React from 'react'
import ExpeienceText from './ExpeienceText'
import ExperiencTop from './ExperiencTop'
import AllExperience from './AllExperience'


const ExperienceMain = () => {
  return (
    <div id='experience' className=' max-w-[1200px] mx-auto px-4'>
        <ExpeienceText/>
        <ExperiencTop/>
        <div className=' w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden'></div>
        <AllExperience/>
        
      
    </div>
  )
}

export default ExperienceMain