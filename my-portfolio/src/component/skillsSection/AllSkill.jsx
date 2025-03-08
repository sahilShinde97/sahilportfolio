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

const AllSkill = () => {
  return (
    <div>
      <div className=' flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((item,index)=>{
          return <SingleSkill key={index} text={item.skill} imaSvg={<item.icon/>}/>
        })}
      </div>
    </div>
  )
}

export default AllSkill