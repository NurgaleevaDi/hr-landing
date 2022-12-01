/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import './Result.css';

const Result = ({
  btnText, title, yes, no, onRedirectButton, vacancies, setIsPopupWithFormOpen, body
}) => {
  const classes = yes > no ? 'result result_type_review' : 'result result_type_teacher';
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(body.current.offsetWidth);
  }, []);

  const handleClick = useCallback(() => {
    if (btnText === 'Перейти к форме') {
      setIsPopupWithFormOpen(true);
    } else {
      onRedirectButton(vacancies);
    }
  }, [yes, no]);

  return (
  <li className={yes === 8 && no === 0 ? 'result result_type_error' : classes}>
    <div style={(no === 8) && width > 375 ? { marginBottom: '107px', flexDirection: 'column' } : { marginBottom: '0', flexDirection: 'column' }} className="card__text-wrapper">
      <p className="result__title" style={(no === 8) && (width > 375 || undefined) ? { marginBottom: '163px', marginTop: '20px', marginLeft: '30px' } : { marginBottom: '15px', marginTop: '25px', marginLeft: '30px' }}>{ title }</p>
      {(no === 8 && yes === 0) && <p className="variable">Заполни форму, мы с тобой свяжемся</p>}
    </div>
    <button onClick={handleClick} style={no !== 8 && width <= 375 ? { marginTop: '81px' } : { marginTop: '137px', marginBottom: '60px' }} className="result__btn">{ btnText }</button>
  </li>
  );
};

export default Result;
