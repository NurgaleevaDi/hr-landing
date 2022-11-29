/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Result.css';

const Result = ({
  btnText, title, yes, no
}) => {
  const classes = yes > no ? 'result result_type_review' : 'result result_type_teacher';

  return (
  <li className={yes === 8 && no === 0 ? 'result result_type_error' : classes}>
    <div style={(no === 8) ? { marginBottom: '107px' } : { marginBottom: '0' }} className="card__text-wrapper">
      <p className="result__title">{ title }</p>
    </div>
    <button className="result__btn">{ btnText }</button>
  </li>
  );
};

export default Result;
