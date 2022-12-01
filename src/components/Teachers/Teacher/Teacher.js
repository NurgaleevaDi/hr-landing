/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Teacher.css';

const Teacher = ({
  image, quote, description, job, name
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
  <li className="teachers__card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
    <div className="teachers__wrapper">
      <img src={image} alt="1" className="teachers__image" />
      <div className="teachers__text-wrapper">
        <h2 className={isHovered ? 'teachers__quote' : 'teachers__quote hidden'}>
        {name}
        </h2>
        <p className={isHovered ? 'teachers__desc' : 'teachers__desc hidden'}>
        {job}
        </p>
      </div>
    </div>
    <h3 className="teacher__title">{ quote }</h3>
    <p className="teacher__subtitle">{ description }</p>
  </li>
  );
};

export default Teacher;
