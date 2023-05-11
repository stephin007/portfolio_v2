import { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualifications</h2>
      <span className='section__subtitle'>My personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
            Experience
          </div>
        </div>
        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  B.Tech in Electronics and Communication
                </h3>
                <span className='qualification__subtitle'>
                  NIET, Greater Noida
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2016 - 2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  Senior Secondary Education(XI-XII)
                </h3>
                <span className='qualification__subtitle'>
                  Assisi Convent School, Noida
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2014 - 2016
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Secondary Education(X)</h3>
                <span className='qualification__subtitle'>
                  Assisi Convent Sr. Sec. School, Noida
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2013 - 2014
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Integration Lead</h3>
                <span className='qualification__subtitle'>Certa,India</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2022 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Solution Engineer</h3>
                <span className='qualification__subtitle'>Certa,India</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2021 - 2022
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  Customer Success and QA
                </h3>
                <span className='qualification__subtitle'>
                  Civil Machines Technologies, India
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  2019 - 2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  Social Media Marketing (Intern)
                </h3>
                <span className='qualification__subtitle'>
                  Bolt: IoT Platform,India
                </span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i>
                  June 2019 - July 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
