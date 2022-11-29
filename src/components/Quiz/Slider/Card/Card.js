/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { useState, React } from 'react';
import './Card.css';

const Card = ({
  num, text, setNo, setYes, yes, no, title
}) => {
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

  const handleLeftBtn = () => {
    setHideLeft(!hideLeft);
    setNo((no) => no + 1);
  };

  const handleRiggnBtn = () => {
    setHideRight(!hideRight);
    setYes((yes) => yes + 1);
  };

  console.log(`${yes} yes`);
  console.log(`${no} no`);
  return (
  <li className={handleBtns(num)}>
    <div className="card__text-wrapper">
      <h3 className="card__title">{title}</h3>
      {num < 0 ? <p className="card__nums">{`${num + 1}/8`}</p> : null}
    </div>
    <p className="card__text">{text}</p>
    <div className="card__buttons-wrapper">
      <button onClick={handleLeftBtn} className="card__button card__btn_left" />
      <button onClick={handleRiggnBtn} className="card__button card__btn_right" />
    </div>
  </li>
  );
};

export default Card;
