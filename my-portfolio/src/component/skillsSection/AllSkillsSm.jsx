import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';

const skills = [
  {
    skill:"HTML",
    icon:FaHtml5,
  },
  {
    skill:"CSS",
    icon:FaCss3,
  },
  {
    skill:"JavaScript",
    icon:IoLogoJavascript,
  },
  {
    skill:"ReactJS",
    icon:RiReactjsFill,
  },
  {
    skill:"MongoDb ",
    icon:SiMongodb ,
  },
  {
    skill:"NextJS",
    icon:RiNextjsFill,
  },
  {
    skill:"TailwindCSS",
    icon:RiTailwindCssFill,
  },
]

const AllSkillsSm = () => {
  return (
    <div className=' grid md:grid-cols-4 sm:grid-cols-2  gap-12 my-12'>
        {skills.map((item , index)=>{
            return <div key={index} className=' flex flex-col items-center'>
                <item.icon className='text-7xl text-orange'/>
                <p className='text-center mt-4 text-white '>{item.skill}</p>
            </div>
        })}
    </div>
  )
}

export default AllSkillsSm