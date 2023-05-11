import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  // Toggle Menu

  const [toggle, showMenu] = useState(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        {/* eslint-disable-next-line */}
        <a href='#' className='nav__logo'>
          Stephin Reji
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='#home' className='nav__link active-link'>
                <i className='ui uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='ui uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href='#skills' className='nav__link'>
                <i className='ui uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            {/* <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
                <i className='ui uil-scenery nav__icon'></i> Portfolio
              </a>
            </li> */}
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='ui uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i
            className='uil uil-times nav__close'
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className='nav__toggle' onClick={() => showMenu(!toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
