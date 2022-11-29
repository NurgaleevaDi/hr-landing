/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Faculty.css';

const Faculty = ({
  img, img2, title, back
}) => {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isDeleted, setIsDeleted] = useState(false);

  const onCardClick = () => {
    setVisible(!visible);
    setTimeout(() => setIsDeleted(!isDeleted), 300);
  };

  const [hovered, setHovered] = useState(false);

  return (
    <>
  <li onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={isDeleted ? { display: 'none' } : { display: 'flex' }} onClick={onCardClick} className={visible ? 'faculties__profession-front faculties__profession-front_hidden' : 'faculties__profession-front'}>
    <img className="faculties__image" src={ hovered ? img2 : img } alt="Изображение" />
    {title}
    <button className="faculties__button-front" alt="Изображение стрелки"/>
  </li>
  <li style={isDeleted ? { display: 'flex' } : { display: 'none' }} className={visible ? 'faculties__profession-back' : 'faculties__profession-back faculties__profession-back_hidden'}>{back}
    <button onClick={onCardClick} className="faculties__button-close" alt="Изображение крестика"/>
    <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
  </li>
  </>
  );
};

export default Faculty;
