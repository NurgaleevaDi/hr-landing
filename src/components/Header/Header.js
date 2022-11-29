import React, { useState } from 'react';
import headerLogo from './images/header-logo.svg';
import NavBurger from './NavBurger/NavBurger';

function Header() {
  const [isOpen, setIsisOpen] = useState(false);

  function onClick() {
    setIsisOpen(true);
  }

  function onClose() {
    setIsisOpen(false);
  }

  return (
      <header className="header">
        <img className="header__logo" src={headerLogo} alt="Лого" />
        <div className="header__container">
        <button className="header__redirect-button">Кто такой наставник?</button>
          <button className="header__redirect-button">Кто такой ревьюер?</button>
          <button className="header__redirect-button">Отзывы</button>
          <button className="header__button">Смотреть предложения</button>
        </div>
        <div className="header__burger-menu" onClick={isOpen ? onClose : onClick}>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
          <span className={`header__burger-class ${isOpen ? 'header__burger-class_clicked' : 'header__burger-class_unclicked'}`}></span>
        </div>
        <NavBurger isOpen={isOpen} onClose={onClose} />
      </header >
  );
}

export default Header;
