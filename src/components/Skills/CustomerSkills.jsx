const CustomerSkills = ({ CustSkillsContent }) => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>Interpersonal Skills</h3>
      <div className='skills__box'>
        <div className='skills__group'>
          {CustSkillsContent.map((csc, id) => {
            return (
              <>
                <div className='skills__data' key={id}>
                  <i className='bx bx-badge-check'></i>
                  <div>
                    <h3 className='skills__name'>{csc.skillNameTitle}</h3>
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

export default CustomerSkills;
