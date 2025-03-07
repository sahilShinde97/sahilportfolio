import React from 'react'
import HeroTxt from './HeroTxt'
import HeroPi from './HeroPi'
import HeroGred from './HeroGred'


const HeroMai = () => {
  return (
    <div className='pt-40 pd-16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4  '>
       <HeroTxt/>
       <HeroPi/>
       <HeroGred/>
       
      </div>
    </div>
  )
}

export default HeroMai