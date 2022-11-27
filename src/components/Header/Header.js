import React from 'react';
import headerLogo from './images/header-logo.svg';

function Header() {
  return (
      <header className="header">
         <img className="header__logo" src={headerLogo} alt="Лого" />
         <div className="header__container">
                  <button className="header__redirect-button">Кто такой ревьюер?</button>
                  <button className="header__redirect-button">Кто такой наставник?</button>
                  <button className="header__button">Смотреть вакансии</button>
         </div>
      </header >
  );
}

export default Header;
