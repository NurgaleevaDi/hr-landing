/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Result.css';

const Result = ({
  btnText, title, yes, no, onRedirectButton, vacancies, setIsPopupWithFormOpen
}) => {
  const classes = yes > no ? 'result result_type_review' : 'result result_type_teacher';

  const handleClick = () => {
    if (btnText === 'Перейти к форме') {
      setIsPopupWithFormOpen(true);
    } else {
      onRedirectButton(vacancies);
    }
  };

  return (
  <li className={yes === 8 && no === 0 ? 'result result_type_error' : classes}>
    <div style={(no === 8) ? { marginBottom: '107px' } : { marginBottom: '0' }} className="card__text-wrapper">
      <p className="result__title">{ title }</p>
    </div>
    <button onClick={handleClick} className="result__btn">{ btnText }</button>
  </li>
  );
};

export default Result;
