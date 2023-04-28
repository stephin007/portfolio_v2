import React from "react";

const Social = () => {
  return (
    <div className='home__social'>
      <a
        href='https://www.linkedin.com/in/stephinreji/'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-linkedin-alt'></i>
      </a>
      <a
        href='https://github.com/stephin007'
        className='home__social-icon'
        target='_blank'
      >
        <i className='uil uil-github-alt'></i>
      </a>
      <a
        href='https://blog.stephinreji.me/'
        className='home__social-icon'
        target='_blank'
      >
        <i class='uil uil-fire'></i>
      </a>
    </div>
  );
};

export default Social;
