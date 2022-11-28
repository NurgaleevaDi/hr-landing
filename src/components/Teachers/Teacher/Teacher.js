/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Teacher.css';

const Teacher = ({ image, quote, description }) => {
  const [test, setTest] = useState();
  return (
  <li className="teachers__card">
    <img src={image} alt="1" className="teachers__image" />
    <h3 className="teacher__title">{ quote }</h3>
    <p className="teacher__subtitle">{ description }</p>
  </li>
  );
};

export default Teacher;
