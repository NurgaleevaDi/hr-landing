/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React from 'react';
/* import headerLogo from '../images/header-logo.svg'; */

function NavBurger({
  isOpen, onClose, teachers, tasks, vacancies
}) {
  isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';

  return (
    <section className={`navBurger ${isOpen ? 'navBurger_opened' : ''}`}>
      <div className="navBurger__container">
        <div className="navBurger__logo"></div>
        <button className="navBurger__redirect-button" onClick={() => onClose(tasks)}>Кто такой наставник?</button>
        <button className="navBurger__redirect-button" onClick={() => onClose(tasks)}>Кто такой ревьюер?</button>
        <button className="navBurger__redirect-button" onClick={() => onClose(vacancies)}>Смотреть предложения о работе</button>
        <button className="navBurger__redirect-button" onClick={() => onClose(teachers)}>Отзывы</button>
      </div>
    </section>
  );
}

export default NavBurger;
