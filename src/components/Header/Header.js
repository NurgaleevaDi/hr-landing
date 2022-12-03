/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import headerLogo from './images/header-logo.svg';
import NavBurger from './NavBurger/NavBurger';

function Header({
  onRedirectButton, vacancies, tasks, teachers
}) {
  const [isOpen, setIsisOpen] = useState(false);

  function onClick() {
    setIsisOpen(true);
  }

  function onClose(component) {
    setIsisOpen(false);
    if (component) {
      onRedirectButton(component);
    }
  }

  return (
      <header className="header">
        <a target="_blank" href="https://practicum.yandex.ru/" rel="noreferrer"><img src={headerLogo} className="header__logo" alt="Лого" /></a>
        <div className="header__container">
          <button className="header__redirect-button" onClick={() => onRedirectButton(tasks)}>Кто такой наставник?</button>
          <button className="header__redirect-button" onClick={() => onRedirectButton(tasks)}>Кто такой ревьюер?</button>
          <button className="header__redirect-button" onClick={() => onRedirectButton(teachers)}>Отзывы</button>
          <button className="header__button" onClick={() => onRedirectButton(vacancies)}>Смотреть предложения</button>
        </div>
        <div className="header__burger-menu" onClick={isOpen ? onClose : onClick}>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
        </div>
        <NavBurger
        isOpen={isOpen}
        onClose={onClose}
        onRedirectButton={onRedirectButton}
        vacancies={vacancies}
        teachers={teachers}
        tasks={tasks}
        />
      </header >
  );
}

export default Header;
