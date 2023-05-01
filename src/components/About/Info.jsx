const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i className='bx bx-award about__icon'></i>
        <h3 className='about__title'>Experience</h3>
        <span className='about__subtitle'>2.5 Years Working</span>
      </div>
      <div className='about__box'>
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>Collaboration</h3>
        <span className='about__subtitle'>
          Assisted in the closure of several Fortune 100 companies
        </span>
      </div>
      <div className='about__box'>
        <i class='bx bxs-bulb about__icon'></i>
        <h3 className='about__title'>Learner</h3>
        <span className='about__subtitle'>
          Thriving to learn how and why things work.
        </span>
      </div>
    </div>
  );
};

export default Info;
