import TechSkills from "./TechSkills";
import CustomerSkills from "./CustomerSkills";

import "./skills.css";

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title skills__section'>Skills</h2>

      <div className='skills__container container grid'>
        <TechSkills />
        <CustomerSkills />
      </div>
    </section>
  );
};

export default Skills;
