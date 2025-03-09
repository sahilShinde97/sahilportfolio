
import AboutMeMain from './component/aboutMeSection/AboutMeMain'
import ExperienceMain from './component/experienceSection/ExperienceMain'
import HeroMai from './component/heroSection/HeroMai'
import SuHero from './component/heroSection/SuHero'
import SkillsMain from './component/skillsSection/SkillsMain'
import SubSkills from './component/skillsSection/SubSkills'
import NavbarMain from './NavbarMain'



function App() {
  return (
  <main className='font-body'> 
     <NavbarMain/>
     <HeroMai/>
     <SuHero/>
     <AboutMeMain/>  
     <SkillsMain/>
     <SubSkills/>
     <ExperienceMain/>
  </main>
  )
}

export default App
