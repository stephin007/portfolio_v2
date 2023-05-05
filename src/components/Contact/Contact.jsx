import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <div className='contact__info'>
            <div className='contact__card'>
              <i className='bx bx-mail-send contact__card-icon'></i>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>mail@stephinreji.me</span>

              <a href='mailto:mail@stephinreji.me' className='contact__button'>
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>

            <div className='contact__card'>
              <i className='bx bxl-twitter contact__card-icon'></i>
              <h3 className='contact__card-title'>Twitter</h3>
              <span className='contact__card-data'>Stephin Reji</span>

              <a
                href='https://twitter.com/reji_stephin'
                className='contact__button'
              >
                Write me
                <i className='bx bx-right-arrow-alt contact__button-icon'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
