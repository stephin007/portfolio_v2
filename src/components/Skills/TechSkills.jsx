const TechSkills = ({ TechSkillsContent }) => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Technical Skills</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          {TechSkillsContent.map((tsc, id) => {
            return (
              <>
                <div className='skills__data' key={id}>
                  <i className='bx bx-badge-check'></i>
                  <div>
                    <h3 className='skills__name'>{tsc.skillNameTitle}</h3>
                    <span className='skills__level'>{tsc.skillNameLevel}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
