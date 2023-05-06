import TechSkills from "./TechSkills";
import CustomerSkills from "./CustomerSkills";

import { TechSkillsContent, CustSkillsContent } from "../../Data/Skills";

import "./skills.css";

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title skills__section'>Skills</h2>

      <div className='skills__container container grid'>
        <TechSkills TechSkillsContent={TechSkillsContent} />
        <CustomerSkills CustSkillsContent={CustSkillsContent} />
      </div>
    </section>
  );
};

export default Skills;
