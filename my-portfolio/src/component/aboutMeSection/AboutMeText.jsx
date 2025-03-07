import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl  text-cyan mb-10">About Me</h2>
        <p className=' text-white'>Hi, I'm Sahil, a web developer who loves building websites.
             I am an expert on React and Front-end development.
              I like to work with real -world projects and always try to learn new web techniques. 
              My goal is to create websites that look good, work well and give users a great experience.
               I believe in writing a clean and simple code that makes websites faster and easy to use. 
               I improve my skills to keep me up to date with the latest trends. 
            I'm always excited to work on new projects and make ideas come true. 
        </p>
        <button className='mt-6 border border-orange rounded-full py-2 px-4 text-lg flex items-center hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white  hover:text-cyan '>My Projects</button>
    </div>
  )
}

export default AboutMeText