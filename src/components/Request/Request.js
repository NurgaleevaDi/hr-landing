/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import chair from './images/chair.png';

const Request = ({
  componentRef, isPopupWithFormOpen, setIsPopupWithFormOpen,
}) => {
  const handleOpenPopup = useCallback(() => {
    setIsPopupWithFormOpen(!isPopupWithFormOpen);
  }, [isPopupWithFormOpen]);

  const handleClosePopup = useCallback(() => {
    setIsPopupWithFormOpen(false);
  }, [isPopupWithFormOpen]);
  return (
    <section className="request" ref={componentRef}>
      <div className="request__container">
        <h2 className="request__title">Не нашли себя в открытых предложениях?</h2>
        <p className="request__text">Оставьте свои контакты – мы свяжемся с вами в течение нескольких часов</p>
        <button type="button" className="request__button" onClick={handleOpenPopup}>Оставить заявку</button>
        <PopupWithForm
          isOpen={isPopupWithFormOpen}
          onClose={handleClosePopup}
        />
        </div>
      <img className="request__img" src={chair} alt="Вакантное место" />
    </section>
  );
};

export default Request;
