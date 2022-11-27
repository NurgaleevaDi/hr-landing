/* eslint-disable react/prop-types */
import { useState, React } from 'react';
import './Card.css';

const Card = ({ num, text }) => {
  const [hideLeft, setHideLeft] = useState(false);
  const [hideRight, setHideRight] = useState(false);

  const handleBtns = (i) => {
    if (hideLeft) {
      return `card card${i + 1} card__rotate_left`;
    }
    if (hideRight) {
      return `card card${i + 1} card__rotate_right`;
    }
    return `card card${i + 1}`;
  };

  return (
  <li className={handleBtns(num)}>
    <div className="card__text-wrapper">
      <h3 className="card__title">Мне нравится...</h3>
      <p className="card__nums">{`${num + 1}/8`}</p>
    </div>
    <p className="card__text">{text}</p>
    <div className="card__buttons-wrapper">
      <button onClick={() => setHideLeft(!hideLeft)} className="card__button card__btn_left" />
      <button onClick={() => setHideRight(!hideRight)} className="card__button card__btn_right" />
    </div>
  </li>
  );
};

export default Card;
