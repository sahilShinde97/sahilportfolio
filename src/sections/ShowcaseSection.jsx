import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const Project3Ref = useRef(null);

  

  
  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, Project3Ref.current];
    projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, 
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
    
            }
    
        )
      })
    

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*LEFT*/}

          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="PORTFOLIO WEBSITE" />
            </div>
            <div className="text-content">
              <h2>MY-PORTFOLIO WEBSITE</h2>
              <p className="text-white-50 md:text-xl">
              3D Web Developer Portfolio with React, Three JS & GSAP
              </p>
            </div>
          </div>
          {/*RIGHT*/}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img
                  src="/images/project2.png"
                  alt="PAPER-PORTFOLIO"
                />
              </div>
              <h2>MIRANDA - Paper Portfolio </h2>
            </div>

            <div className="project" ref={Project3Ref}>
              <div className="image-wrapper bg-[#ffe7efdb]">
                <img src="/images/project3.png" alt="To-Good-Co" />
              </div>   
            </div>
            <h2>To-Good-Co - A website clone using HTML, CSS, and JavaScript.</h2>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
