import React from "react";
import SkillsTxt from "./SkillsTxt";
import AllSkill from "./AllSkill";
import AllSkillsSm from "./AllSkillsSm";
import SubSkills from "./SubSkills";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
          <SkillsTxt />
        <div className=" bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkill />
        </div>
        <div className=" sm:block lg:hidden">
          <AllSkillsSm/>
        </div>
       
      </div>
    </div>
  );
};

export default SkillsMain;
