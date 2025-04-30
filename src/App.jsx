


import NavBar from "./components/Navbar";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";



const App = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
  
    </>
  );
};

export default App;
