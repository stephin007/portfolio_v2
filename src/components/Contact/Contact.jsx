import "./contact.css";

import ContactContent from "../../Data/Contact";

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>
      <div className='contact__container container grid'>
        <div className='contact__content'>
          <div className='contact__info'>
            {ContactContent.map((cc, id) => {
              return (
                <>
                  <div className='contact__card' key={id}>
                    <i className={cc.contactIconClass}></i>
                    <h3 className='contact__card-title'>{cc.contactTitle}</h3>
                    <span className='contact__card-data'>{cc.contactText}</span>
                    <a href={cc.contactHref} className='contact__button'>
                      Write me
                      <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
