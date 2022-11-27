import React, { useState } from 'react';

function Vacancies() {
  const [isClicked, setIsClicked] = useState(true);

  function handleOnClick() {
    setIsClicked(!isClicked);
  }

  return (
      <section className="vacancies">
         <h2 className="vacancies__title">Открытые вакансии</h2>
         <div className="vacancies__container">
                  <button className={`vacancies__button ${isClicked ? '' : 'vacancies__button_disabled'}`} onClick={handleOnClick}>Для наставников</button>
                  <button className={`vacancies__button ${isClicked ? 'vacancies__button_disabled' : ''}`} onClick={handleOnClick}>Для ревьюеров</button>
         </div>
      </section>
  );
}

export default Vacancies;
