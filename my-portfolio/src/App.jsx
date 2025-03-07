
import AboutMeMain from './component/aboutMeSection/AboutMeMain'
import HeroMai from './component/heroSection/HeroMai'
import SuHero from './component/heroSection/SuHero'
import HelperSection from './component/navbar/HelperSection'
import NavbarMain from './NavbarMain'
import SkillsMain from './component/skillsSection/SkillsMain'


function App() {


  return (
  <main className='font-body'> 
     <NavbarMain/>
     <HeroMai/>
     <SuHero/>
     <AboutMeMain/>
     <HelperSection/>
     
  </main>
  )
}

export default App
