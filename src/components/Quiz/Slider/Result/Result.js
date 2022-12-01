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
  console.log(width);

  const desctop = no === 8 && (width > 375) ? { marginBottom: '60px' } : { marginTop: '134px', marginBottom: '60px' };
  const mobile = no === 8 && (width <= 375) ? { marginBottom: '35px' } : { marginBottom: '35px', marginTop: '81px' };
  return (
  <li className={yes === 8 && no === 0 ? 'result result_type_error' : classes}>
    <div className="result__text-wrapper">
      <p className="result__title" style={((no === 8) && (width > 375)) && yes === 0 ? { marginBottom: '20px', marginTop: '45px', marginLeft: '30px' } : { marginBottom: '0', marginTop: '25px', marginLeft: '30px' }}>{ title }</p>
      {(no === 8 && yes === 0) && <p className="variable">Заполни форму, мы с тобой свяжемся</p>}
    </div>
    <button onClick={handleClick} style={width > 375 ? desctop : mobile} className="result__btn">{ btnText }</button>
  </li>
  );
};

export default Result;
