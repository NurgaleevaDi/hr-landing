/* eslint-disable react/prop-types */
import React from 'react';

function Vacancie({
  faculty, salary, description, link
}) {
  return (
      <section className="vacancie">
        <div className="vacancie__container">
          <h2 className="vacancie__title">{faculty}</h2>
          <p className="vacancie__text">Примерно {salary} мес</p>
          <p className="vacancie__text">{description}</p>
        </div>
        <a target="_blank" href={link} className="vacancie__button" rel="noreferrer">Узнать подробнее</a>
      </section >
  );
}

export default Vacancie;
