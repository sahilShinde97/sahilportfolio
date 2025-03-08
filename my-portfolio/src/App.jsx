
import AboutMeMain from './component/aboutMeSection/AboutMeMain'
import HelpeSec from './component/HelpeSec'
import HeroMai from './component/heroSection/HeroMai'
import SuHero from './component/heroSection/SuHero'
import SkillsMain from './component/skillsSection/SkillsMain'
import NavbarMain from './NavbarMain'



function App() {
  return (
  <main className='font-body'> 
     <NavbarMain/>
     <HeroMai/>
     <SuHero/>
     <AboutMeMain/>
     <HelpeSec/>
     <SkillsMain/>
  </main>
  )
}

export default App
