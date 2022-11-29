/* eslint-disable react/prop-types */
import React from 'react';

function Vacancie({ faculty, salary, description }) {
  return (
      <section className="vacancie">
        <div className="vacancie__container">
          <h2 className="vacancie__title">{faculty}</h2>
          <p className="vacancie__text">Примерно {salary} мес
            <p className="vacancie__text">{description}</p>
          </p>
        </div>
        <button className="vacancie__button">Подробнее</button>
      </section >
  );
}

export default Vacancie;
