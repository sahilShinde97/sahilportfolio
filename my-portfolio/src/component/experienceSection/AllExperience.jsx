 import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job : 'Front-End Developer',
    company:'Alex Apps',
    date:'2024-Present',
    responsibilities :[
      '•I specialize in React and modern JavaScriptReact and modern JavaScript, ',
      '•leveraging best practices to create scalable and maintainable solutions.',
      
    ]
  },
  {
    job : 'Front-End Developer',
    company:'Alex Apps',
    date:'2024-Present',
    responsibilities :[
      '•I specialize in React and modern JavaScriptReact and modern JavaScript, ',
      '•leveraging best practices to create scalable and maintainable solutions.',
      
      
    ]
  },
  {
    job : 'Front-End Developer',
    company:'Alex Apps',
    date:'2024-Present',
    responsibilities :[
      '•I specialize in React and modern JavaScriptReact and modern JavaScript, ',
      '•leveraging best practices to create scalable and maintainable solutions.',
      
    ]
  },
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience ,index)=>{
        return <>
        <SingleExperience key={index} experience={experience}/>
        {index < 2 ? <FaArrowRight className='text-6xl text-orange lg:block sm:hidden'/> : ""}
        
        </> 
      })}
    </div>
  )
}

export default AllExperience 